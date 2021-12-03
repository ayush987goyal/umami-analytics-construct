const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Ayush Goyal',
  authorAddress: 'ayush987goyal@gmail.com',
  cdkVersion: '1.129.0',
  defaultReleaseBranch: 'main',
  name: 'umami-analytics-construct',
  repositoryUrl:
    'https://github.com/ayush987goyal/umami-analytics-construct.git',
  cdkAssert: true,
  cdkDependencies: [
    '@aws-cdk/aws-cloudfront',
    '@aws-cdk/aws-cloudfront-origins',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-rds',
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
  ],
  bundledDeps: ['pg@^8.5.1'],
  devDeps: ['@types/aws-lambda', '@types/pg@^7.14.8'],
});
project.synth();
