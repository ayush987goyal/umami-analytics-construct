import * as path from 'path';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';

export interface SchemaCreatorProps {
  readonly vpc: ec2.IVpc;
  readonly dbSecurityGroups: ec2.ISecurityGroup[];
  readonly dbUrl: string;
}

export class SchemaCreator extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: SchemaCreatorProps) {
    super(scope, id);

    const handlerFn = new lambda.Function(this, 'Lambda', {
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambdas')),
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'schema-creator-handler.handler',
      vpc: props.vpc,
      environment: { DB_URL: props.dbUrl },
      memorySize: 512,
      timeout: cdk.Duration.minutes(10),
    });
    handlerFn.connections.addSecurityGroup(...props.dbSecurityGroups);

    const provider = new cr.Provider(this, 'Provider', {
      onEventHandler: handlerFn,
    });

    new cdk.CustomResource(this, 'CustomResource', {
      serviceToken: provider.serviceToken,
    });
  }
}
