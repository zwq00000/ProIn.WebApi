# ProinApi.WorkpieceApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkpiece**](WorkpieceApi.md#createWorkpiece) | **POST** /workpieces | 提交一个新的工件信息
[**deleteWorkpiece**](WorkpieceApi.md#deleteWorkpiece) | **DELETE** /workpieces/{partId} | delete a workpiece
[**getWorkpiece**](WorkpieceApi.md#getWorkpiece) | **GET** /workpieces/{partId} | get a workpiece
[**getWorkpieces**](WorkpieceApi.md#getWorkpieces) | **GET** /workpieces | 获得一个分页的工件列表
[**updateWorkpiece**](WorkpieceApi.md#updateWorkpiece) | **PUT** /workpieces | 修改并更新一个 Workpiece 实例


<a name="createWorkpiece"></a>
# **createWorkpiece**
> Workpiece createWorkpiece(opts)

提交一个新的工件信息

Adds a new workpiece to the workpieces list.

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.WorkpieceApi();

let opts = { 
  'workpiece': new ProinApi.Workpiece() // Workpiece | The workpiece to create.
};
apiInstance.createWorkpiece(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workpiece** | [**Workpiece**](Workpiece.md)| The workpiece to create. | [optional] 

### Return type

[**Workpiece**](Workpiece.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteWorkpiece"></a>
# **deleteWorkpiece**
> deleteWorkpiece(partId)

delete a workpiece

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.WorkpieceApi();

let partId = "partId_example"; // String | The Workpiece PartId

apiInstance.deleteWorkpiece(partId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | **String**| The Workpiece PartId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getWorkpiece"></a>
# **getWorkpiece**
> Workpiece getWorkpiece(partId)

get a workpiece

return a single workpiece for its partId

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.WorkpieceApi();

let partId = "partId_example"; // String | The Workpiece PartId

apiInstance.getWorkpiece(partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | **String**| The Workpiece PartId | 

### Return type

[**Workpiece**](Workpiece.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getWorkpieces"></a>
# **getWorkpieces**
> PagedWorkpieces getWorkpieces(opts)

获得一个分页的工件列表

Returns a list of all workpieces,the list supports paging.

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.WorkpieceApi();

let opts = { 
  'pageSize': 20, // Number | 页面大小
  'pageNumber': 0, // Number | 页码，从 0 开始
  'searchStr': "searchStr_example", // String | 搜索关键词
  'category': "category_example" // String | 工件分类名称
};
apiInstance.getWorkpieces(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| 页面大小 | [optional] [default to 20]
 **pageNumber** | **Number**| 页码，从 0 开始 | [optional] [default to 0]
 **searchStr** | **String**| 搜索关键词 | [optional] 
 **category** | **String**| 工件分类名称 | [optional] 

### Return type

[**PagedWorkpieces**](PagedWorkpieces.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="updateWorkpiece"></a>
# **updateWorkpiece**
> Workpiece updateWorkpiece(workpiece)

修改并更新一个 Workpiece 实例

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.WorkpieceApi();

let workpiece = new ProinApi.Workpiece(); // Workpiece | 

apiInstance.updateWorkpiece(workpiece).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workpiece** | [**Workpiece**](Workpiece.md)|  | 

### Return type

[**Workpiece**](Workpiece.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

