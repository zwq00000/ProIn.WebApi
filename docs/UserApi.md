# ProinApi.UserApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /users | 提交并创建用户
[**getUser**](UserApi.md#getUser) | **GET** /users/{uid} | 
[**getUsers**](UserApi.md#getUsers) | **GET** /users | 
[**updateUser**](UserApi.md#updateUser) | **PUT** /users | 提交并更新用户数据


<a name="createUser"></a>
# **createUser**
> User createUser(user)

提交并创建用户

创建用户

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.UserApi();

let user = new ProinApi.User(); // User | 

apiInstance.createUser(user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(uid)



根据 UserId 获取用户实例

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.UserApi();

let uid = "uid_example"; // String | 

apiInstance.getUser(uid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uid** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> PagedUsers getUsers(opts)



获取用户列表

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.UserApi();

let opts = { 
  'pageSize': 20, // Number | Number of items returned
  'pageNumber': 0 // Number | Page number
};
apiInstance.getUsers(opts).then((data) => {
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

### Return type

[**PagedUsers**](PagedUsers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> User updateUser(user)

提交并更新用户数据

更新用户数据

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.UserApi();

let user = new ProinApi.User(); // User | 

apiInstance.updateUser(user).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

