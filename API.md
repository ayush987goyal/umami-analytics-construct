# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UmamiAnalyticsConstruct <a name="UmamiAnalyticsConstruct" id="umami-analytics-construct.UmamiAnalyticsConstruct"></a>

#### Initializers <a name="Initializers" id="umami-analytics-construct.UmamiAnalyticsConstruct.Initializer"></a>

```typescript
import { UmamiAnalyticsConstruct } from 'umami-analytics-construct'

new UmamiAnalyticsConstruct(parent: Construct, name: string, props?: UmamiAnalyticsConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.Initializer.parameter.parent">parent</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#umami-analytics-construct.UmamiAnalyticsConstructProps">UmamiAnalyticsConstructProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="umami-analytics-construct.UmamiAnalyticsConstruct.Initializer.parameter.parent"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="umami-analytics-construct.UmamiAnalyticsConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="umami-analytics-construct.UmamiAnalyticsConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#umami-analytics-construct.UmamiAnalyticsConstructProps">UmamiAnalyticsConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="umami-analytics-construct.UmamiAnalyticsConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="umami-analytics-construct.UmamiAnalyticsConstruct.isConstruct"></a>

```typescript
import { UmamiAnalyticsConstruct } from 'umami-analytics-construct'

UmamiAnalyticsConstruct.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="umami-analytics-construct.UmamiAnalyticsConstruct.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.property.bastion">bastion</a></code> | <code>@aws-cdk/aws-ec2.BastionHostLinux</code> | *No description.* |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.property.cloudfrontDistribution">cloudfrontDistribution</a></code> | <code>@aws-cdk/aws-cloudfront.Distribution</code> | *No description.* |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-ecs.ICluster</code> | *No description.* |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.property.databaseInstance">databaseInstance</a></code> | <code>@aws-cdk/aws-rds.DatabaseInstance</code> | *No description.* |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.property.service">service</a></code> | <code>@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService</code> | *No description.* |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstruct.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="umami-analytics-construct.UmamiAnalyticsConstruct.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `bastion`<sup>Required</sup> <a name="bastion" id="umami-analytics-construct.UmamiAnalyticsConstruct.property.bastion"></a>

```typescript
public readonly bastion: BastionHostLinux;
```

- *Type:* @aws-cdk/aws-ec2.BastionHostLinux

---

##### `cloudfrontDistribution`<sup>Required</sup> <a name="cloudfrontDistribution" id="umami-analytics-construct.UmamiAnalyticsConstruct.property.cloudfrontDistribution"></a>

```typescript
public readonly cloudfrontDistribution: Distribution;
```

- *Type:* @aws-cdk/aws-cloudfront.Distribution

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="umami-analytics-construct.UmamiAnalyticsConstruct.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* @aws-cdk/aws-ecs.ICluster

---

##### `databaseInstance`<sup>Required</sup> <a name="databaseInstance" id="umami-analytics-construct.UmamiAnalyticsConstruct.property.databaseInstance"></a>

```typescript
public readonly databaseInstance: DatabaseInstance;
```

- *Type:* @aws-cdk/aws-rds.DatabaseInstance

---

##### `service`<sup>Required</sup> <a name="service" id="umami-analytics-construct.UmamiAnalyticsConstruct.property.service"></a>

```typescript
public readonly service: NetworkLoadBalancedFargateService;
```

- *Type:* @aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="umami-analytics-construct.UmamiAnalyticsConstruct.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

---


## Structs <a name="Structs" id="Structs"></a>

### UmamiAnalyticsConstructProps <a name="UmamiAnalyticsConstructProps" id="umami-analytics-construct.UmamiAnalyticsConstructProps"></a>

#### Initializer <a name="Initializer" id="umami-analytics-construct.UmamiAnalyticsConstructProps.Initializer"></a>

```typescript
import { UmamiAnalyticsConstructProps } from 'umami-analytics-construct'

const umamiAnalyticsConstructProps: UmamiAnalyticsConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#umami-analytics-construct.UmamiAnalyticsConstructProps.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | *No description.* |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="umami-analytics-construct.UmamiAnalyticsConstructProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

---



