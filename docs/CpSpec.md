# ProinApi.CpSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**specId** | **String** | 测量项目ID | 
**orderNo** | **Number** | 默认顺序号，该检测项在任务中的排序 | [optional] 
**specName** | **String** | 项目名称 | 
**partId** | **String** | 产品Id | [optional] 
**standard** | **String** | 测量标准规范编号 | [optional] 
**gageType** | **String** | 千分表/千分尺.. | [optional] 
**valueType** | **String** | 逻辑型或者 数值型 | [optional] 
**precision** | **Number** | 测量精度，小数点后保留位数 | [optional] 
**units** | **String** | 测量单位 mm/N... | [optional] 
**toleranceDefine** | **String** | 公差定义 | [optional] 
**instruction** | **String** | 操作说明 | [optional] 
**usl** | **Number** | 公差上限 | [optional] 
**lsl** | **Number** | 公差下限 | [optional] 
**M** | **Number** | 中心值 | [optional] 
**T** | **Number** | 目标值 | [optional] 


<a name="ValueTypeEnum"></a>
## Enum: ValueTypeEnum


* `Number` (value: `"Number"`)

* `Logic` (value: `"Logic"`)




