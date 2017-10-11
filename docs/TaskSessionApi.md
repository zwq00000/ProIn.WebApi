# ProinApi.TaskSessionApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskSession**](TaskSessionApi.md#createTaskSession) | **POST** /taskSessions | create a TaskSession
[**getMeasureTasks**](TaskSessionApi.md#getMeasureTasks) | **GET** /taskSessions | 获取测量任务分页列表
[**getTaskSession**](TaskSessionApi.md#getTaskSession) | **GET** /taskSessions/{ssid} | get a taskSession by sessionId


<a name="createTaskSession"></a>
# **createTaskSession**
> createTaskSession(opts)

create a TaskSession

测量完成后，提交测量结果

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.TaskSessionApi();

let opts = { 
  'taskSession': new ProinApi.TaskSession() // TaskSession | measureTeask and values
};
apiInstance.createTaskSession(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskSession** | [**TaskSession**](TaskSession.md)| measureTeask and values | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getMeasureTasks"></a>
# **getMeasureTasks**
> PagedTaskSessions getMeasureTasks(opts)

获取测量任务分页列表

获取已经完成的测量任务列表

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.TaskSessionApi();

let opts = { 
  'pageSize': 20, // Number | Number of items returned
  'pageNumber': 0, // Number | Page number
  'partId': "partId_example", // String | 工件Id
  'startDate': new Date("2013-10-20"), // Date | Task start Data Range,,if empty use today
  'endDate': new Date("2013-10-20") // Date | Task end Data Range,if empty use today
};
apiInstance.getMeasureTasks(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| Number of items returned | [optional] [default to 20]
 **pageNumber** | **Number**| Page number | [optional] [default to 0]
 **partId** | **String**| 工件Id | [optional] 
 **startDate** | **Date**| Task start Data Range,,if empty use today | [optional] 
 **endDate** | **Date**| Task end Data Range,if empty use today | [optional] 

### Return type

[**PagedTaskSessions**](PagedTaskSessions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getTaskSession"></a>
# **getTaskSession**
> TaskSession getTaskSession(ssid)

get a taskSession by sessionId

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.TaskSessionApi();

let ssid = 789; // Number | 

apiInstance.getTaskSession(ssid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ssid** | **Number**|  | 

### Return type

[**TaskSession**](TaskSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

