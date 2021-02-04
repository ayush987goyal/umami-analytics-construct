import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecsPatterns from '@aws-cdk/aws-ecs-patterns';
import * as rds from '@aws-cdk/aws-rds';
import * as cdk from '@aws-cdk/core';

import { SchemaCreator } from './schema-creator';

const DATABASE_NAME = 'umami';

export interface UmamiAnalyticsConstructProps {
  readonly vpc?: ec2.IVpc;
}

export class UmamiAnalyticsConstruct extends cdk.Construct {
  public readonly vpc: ec2.IVpc;
  public readonly cluster: ecs.ICluster;
  public readonly bastion: ec2.BastionHostLinux;
  public readonly databaseInstance: rds.DatabaseInstance;
  public readonly service: ecsPatterns.NetworkLoadBalancedFargateService;
  public readonly cloudfrontDistribution: cloudfront.Distribution;

  constructor(
    parent: cdk.Construct,
    name: string,
    props?: UmamiAnalyticsConstructProps,
  ) {
    super(parent, name);

    this.vpc = props?.vpc ?? new ec2.Vpc(this, 'Vpc');

    this.cluster = new ecs.Cluster(this, 'Cluster', {
      vpc: this.vpc,
      containerInsights: true,
    });

    this.bastion = new ec2.BastionHostLinux(this, 'Bastion', {
      vpc: this.vpc,
      subnetSelection: { subnetType: ec2.SubnetType.PUBLIC },
    });

    this.databaseInstance = new rds.DatabaseInstance(this, 'DatabaseInstance', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_11_9,
      }),
      vpc: this.vpc,
      databaseName: DATABASE_NAME,
    });

    const schemaCreator = new SchemaCreator(this, 'SchemaCreator', {
      vpc: this.vpc,
      dbSecurityGroups: this.databaseInstance.connections.securityGroups,
      dbUrl: this.getDatabaseUrl(),
    });
    schemaCreator.node.addDependency(this.databaseInstance);

    this.service = new ecsPatterns.NetworkLoadBalancedFargateService(
      this,
      'UmamiService',
      {
        cluster: this.cluster,
        memoryLimitMiB: 2048,
        cpu: 1024,
        taskImageOptions: {
          containerPort: 3000,
          image: new ecs.RepositoryImage(
            'ghcr.io/mikecao/umami:postgresql-latest',
          ),
          environment: {
            DATABASE_URL: this.getDatabaseUrl(),
            DATABASE_TYPE: 'postgresql',
            HASH_SALT: '26C938F2-5D6E-482E-90B1-850F84F32BDE',
          },
        },
      },
    );

    this.configureDatabaseConnections();
    this.configureServiceConnections();

    this.cloudfrontDistribution = new cloudfront.Distribution(
      this,
      'Distribution',
      {
        defaultBehavior: {
          origin: new origins.LoadBalancerV2Origin(this.service.loadBalancer, {
            protocolPolicy: cloudfront.OriginProtocolPolicy.HTTP_ONLY,
          }),
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER,
          cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
        },
      },
    );
    new cdk.CfnOutput(this, 'DistributionDomain', {
      value: this.cloudfrontDistribution.distributionDomainName,
    });
  }

  private getDatabaseUrl() {
    const address = this.databaseInstance.instanceEndpoint.socketAddress;
    const secret = this.databaseInstance.secret;
    if (!secret) {
      throw Error('Secret should be present');
    }

    const username = secret.secretValueFromJson('username');
    const password = secret.secretValueFromJson('password');

    return `postgresql://${username}:${password}@${address}/${DATABASE_NAME}`;
  }

  private configureDatabaseConnections() {
    this.databaseInstance.connections.allowDefaultPortFromAnyIpv4();
    this.bastion.connections.addSecurityGroup(
      ...this.databaseInstance.connections.securityGroups,
    );
    this.service.service.connections.addSecurityGroup(
      ...this.databaseInstance.connections.securityGroups,
    );
  }

  private configureServiceConnections() {
    this.service.loadBalancer.addListener('HttpsListener', {
      port: 443,
      defaultTargetGroups: [this.service.targetGroup],
    });

    const allPorts = new ec2.Port({
      protocol: ec2.Protocol.TCP,
      fromPort: 0,
      toPort: 65535,
      stringRepresentation: 'All',
    });
    this.service.service.connections.allowFromAnyIpv4(allPorts);

    this.service.targetGroup.configureHealthCheck({ port: 'traffic-port' });
    this.service.targetGroup.setAttribute(
      'deregistration_delay.timeout_seconds',
      '60',
    );
  }
}
