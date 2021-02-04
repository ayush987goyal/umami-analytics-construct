import '@aws-cdk/assert/jest';
import { Stack } from '@aws-cdk/core';

import { UmamiAnalyticsConstruct } from '../src';

test('UmamiAnalyticsConstruct', () => {
  // GIVEN
  const stack = new Stack();

  // WHEN
  new UmamiAnalyticsConstruct(stack, 'UmamiAnalytics');

  // THEN
  expect(stack).toHaveResource('AWS::EC2::VPC');
});