# API Reference

**Classes**

Name|Description
----|-----------
[UmamiAnalyticsConstruct](#umami-analytics-construct-umamianalyticsconstruct)|*No description*


**Structs**

Name|Description
----|-----------
[UmamiAnalyticsConstructProps](#umami-analytics-construct-umamianalyticsconstructprops)|*No description*



## class UmamiAnalyticsConstruct  <a id="umami-analytics-construct-umamianalyticsconstruct"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new UmamiAnalyticsConstruct(parent: Construct, name: string, props: UmamiAnalyticsConstructProps)
```

* **parent** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[UmamiAnalyticsConstructProps](#umami-analytics-construct-umamianalyticsconstructprops)</code>)  *No description*
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**bastion** | <code>[BastionHostLinux](#aws-cdk-aws-ec2-bastionhostlinux)</code> | <span></span>
**cloudfrontDistribution** | <code>[Distribution](#aws-cdk-aws-cloudfront-distribution)</code> | <span></span>
**cluster** | <code>[ICluster](#aws-cdk-aws-ecs-icluster)</code> | <span></span>
**databaseInstance** | <code>[DatabaseInstance](#aws-cdk-aws-rds-databaseinstance)</code> | <span></span>
**service** | <code>[NetworkLoadBalancedFargateService](#aws-cdk-aws-ecs-patterns-networkloadbalancedfargateservice)</code> | <span></span>
**vpc** | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | <span></span>



## struct UmamiAnalyticsConstructProps  <a id="umami-analytics-construct-umamianalyticsconstructprops"></a>






Name | Type | Description 
-----|------|-------------
**vpc**? | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | __*Optional*__



