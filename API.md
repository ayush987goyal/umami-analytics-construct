# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### UmamiAnalyticsConstruct <a name="umami-analytics-construct.UmamiAnalyticsConstruct" id="umamianalyticsconstructumamianalyticsconstruct"></a>

#### Initializers <a name="umami-analytics-construct.UmamiAnalyticsConstruct.Initializer" id="umamianalyticsconstructumamianalyticsconstructinitializer"></a>

```typescript
import { UmamiAnalyticsConstruct } from 'umami-analytics-construct'

new UmamiAnalyticsConstruct(parent: Construct, name: string, props?: UmamiAnalyticsConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`parent`](#umamianalyticsconstructumamianalyticsconstructparameterparent)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`name`](#umamianalyticsconstructumamianalyticsconstructparametername)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#umamianalyticsconstructumamianalyticsconstructparameterprops) | [`umami-analytics-construct.UmamiAnalyticsConstructProps`](#umami-analytics-construct.UmamiAnalyticsConstructProps) | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.parameter.parent" id="umamianalyticsconstructumamianalyticsconstructparameterparent"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `name`<sup>Required</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.parameter.name" id="umamianalyticsconstructumamianalyticsconstructparametername"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.parameter.props" id="umamianalyticsconstructumamianalyticsconstructparameterprops"></a>

- *Type:* [`umami-analytics-construct.UmamiAnalyticsConstructProps`](#umami-analytics-construct.UmamiAnalyticsConstructProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bastion`](#umamianalyticsconstructumamianalyticsconstructpropertybastion)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.BastionHostLinux`](#@aws-cdk/aws-ec2.BastionHostLinux) | *No description.* |
| [`cloudfrontDistribution`](#umamianalyticsconstructumamianalyticsconstructpropertycloudfrontdistribution)<span title="Required">*</span> | [`@aws-cdk/aws-cloudfront.Distribution`](#@aws-cdk/aws-cloudfront.Distribution) | *No description.* |
| [`cluster`](#umamianalyticsconstructumamianalyticsconstructpropertycluster)<span title="Required">*</span> | [`@aws-cdk/aws-ecs.ICluster`](#@aws-cdk/aws-ecs.ICluster) | *No description.* |
| [`databaseInstance`](#umamianalyticsconstructumamianalyticsconstructpropertydatabaseinstance)<span title="Required">*</span> | [`@aws-cdk/aws-rds.DatabaseInstance`](#@aws-cdk/aws-rds.DatabaseInstance) | *No description.* |
| [`service`](#umamianalyticsconstructumamianalyticsconstructpropertyservice)<span title="Required">*</span> | [`@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService`](#@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService) | *No description.* |
| [`vpc`](#umamianalyticsconstructumamianalyticsconstructpropertyvpc)<span title="Required">*</span> | [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc) | *No description.* |

---

##### `bastion`<sup>Required</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.property.bastion" id="umamianalyticsconstructumamianalyticsconstructpropertybastion"></a>

```typescript
public readonly bastion: BastionHostLinux;
```

- *Type:* [`@aws-cdk/aws-ec2.BastionHostLinux`](#@aws-cdk/aws-ec2.BastionHostLinux)

---

##### `cloudfrontDistribution`<sup>Required</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.property.cloudfrontDistribution" id="umamianalyticsconstructumamianalyticsconstructpropertycloudfrontdistribution"></a>

```typescript
public readonly cloudfrontDistribution: Distribution;
```

- *Type:* [`@aws-cdk/aws-cloudfront.Distribution`](#@aws-cdk/aws-cloudfront.Distribution)

---

##### `cluster`<sup>Required</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.property.cluster" id="umamianalyticsconstructumamianalyticsconstructpropertycluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* [`@aws-cdk/aws-ecs.ICluster`](#@aws-cdk/aws-ecs.ICluster)

---

##### `databaseInstance`<sup>Required</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.property.databaseInstance" id="umamianalyticsconstructumamianalyticsconstructpropertydatabaseinstance"></a>

```typescript
public readonly databaseInstance: DatabaseInstance;
```

- *Type:* [`@aws-cdk/aws-rds.DatabaseInstance`](#@aws-cdk/aws-rds.DatabaseInstance)

---

##### `service`<sup>Required</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.property.service" id="umamianalyticsconstructumamianalyticsconstructpropertyservice"></a>

```typescript
public readonly service: NetworkLoadBalancedFargateService;
```

- *Type:* [`@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService`](#@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService)

---

##### `vpc`<sup>Required</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstruct.property.vpc" id="umamianalyticsconstructumamianalyticsconstructpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---


## Structs <a name="Structs" id="structs"></a>

### UmamiAnalyticsConstructProps <a name="umami-analytics-construct.UmamiAnalyticsConstructProps" id="umamianalyticsconstructumamianalyticsconstructprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { UmamiAnalyticsConstructProps } from 'umami-analytics-construct'

const umamiAnalyticsConstructProps: UmamiAnalyticsConstructProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#umamianalyticsconstructumamianalyticsconstructpropspropertyvpc) | [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc) | *No description.* |

---

##### `vpc`<sup>Optional</sup> <a name="umami-analytics-construct.UmamiAnalyticsConstructProps.property.vpc" id="umamianalyticsconstructumamianalyticsconstructpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---



