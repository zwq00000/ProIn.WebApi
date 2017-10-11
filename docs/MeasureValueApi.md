# ProinApi.MeasureValueApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMeasureValue**](MeasureValueApi.md#getMeasureValue) | **GET** /measureValue/{specId} | 获取测量值(数值集合)


<a name="getMeasureValue"></a>
# **getMeasureValue**
> MeasureValue getMeasureValue(specId, opts)

获取测量值(数值集合)

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.MeasureValueApi();

let specId = "specId_example"; // String | 检测项Id

let opts = { 
  'startDate': new Date("2013-10-20"), // Date | 开始日期
  'endDate': new Date("2013-10-20") // Date | 结束日期
};
apiInstance.getMeasureValue(specId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specId** | **String**| 检测项Id | 
 **startDate** | **Date**| 开始日期 | [optional] 
 **endDate** | **Date**| 结束日期 | [optional] 

### Return type

[**MeasureValue**](MeasureValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

