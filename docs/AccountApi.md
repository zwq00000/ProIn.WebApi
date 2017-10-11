# ProinApi.AccountApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserInfo**](AccountApi.md#getUserInfo) | **GET** /account/info | 
[**login**](AccountApi.md#login) | **POST** /account/login | 
[**logout**](AccountApi.md#logout) | **POST** /account/logout | 


<a name="getUserInfo"></a>
# **getUserInfo**
> UserInfo getUserInfo(token)



获取当前用户信息

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.AccountApi();

let token = "token_example"; // String | 

apiInstance.getUserInfo(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="login"></a>
# **login**
> UserInfo login(opts)



用户登录

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.AccountApi();

let opts = { 
  'loginInfo': new ProinApi.LoginInfo() // LoginInfo | 登录信息
};
apiInstance.login(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginInfo** | [**LoginInfo**](LoginInfo.md)| 登录信息 | [optional] 

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> &#39;String&#39; logout(token)



用户注销

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.AccountApi();

let token = "token_example"; // String | 

apiInstance.logout(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

