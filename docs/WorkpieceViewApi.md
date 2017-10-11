# ProinApi.WorkpieceViewApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategories**](WorkpieceViewApi.md#getCategories) | **GET** /categories | 获取工件分类列表


<a name="getCategories"></a>
# **getCategories**
> [&#39;String&#39;] getCategories()

获取工件分类列表

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.WorkpieceViewApi();
apiInstance.getCategories().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

