# ProinApi.CpSpecApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCpspec**](CpSpecApi.md#createCpspec) | **POST** /cpspec/{specId} | Creates a CpSpec
[**deleteCpspec**](CpSpecApi.md#deleteCpspec) | **DELETE** /cpspec/{specId} | delete a CpSpec
[**getCpspec**](CpSpecApi.md#getCpspec) | **GET** /cpspec/{specId} | get a cpspec
[**getCpspecsByPartId**](CpSpecApi.md#getCpspecsByPartId) | **GET** /workpieces/{partId}/cpspecs | get a cpspec list in thie workpiece
[**updateCpspec**](CpSpecApi.md#updateCpspec) | **PUT** /cpspec/{specId} | modify a cpspec


<a name="createCpspec"></a>
# **createCpspec**
> CpSpec createCpspec(specId, opts)

Creates a CpSpec

Adds a new CpSpec to the CpSpecs list.

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.CpSpecApi();

let specId = "specId_example"; // String | The CpSpec Id

let opts = { 
  'cpSpec': new ProinApi.CpSpec() // CpSpec | The cpspec to create.
};
apiInstance.createCpspec(specId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specId** | **String**| The CpSpec Id | 
 **cpSpec** | [**CpSpec**](CpSpec.md)| The cpspec to create. | [optional] 

### Return type

[**CpSpec**](CpSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteCpspec"></a>
# **deleteCpspec**
> deleteCpspec(specId)

delete a CpSpec

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.CpSpecApi();

let specId = "specId_example"; // String | The CpSpec Id

apiInstance.deleteCpspec(specId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specId** | **String**| The CpSpec Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getCpspec"></a>
# **getCpspec**
> CpSpec getCpspec(specId)

get a cpspec

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.CpSpecApi();

let specId = "specId_example"; // String | The CpSpec Id

apiInstance.getCpspec(specId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specId** | **String**| The CpSpec Id | 

### Return type

[**CpSpec**](CpSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="getCpspecsByPartId"></a>
# **getCpspecsByPartId**
> [CpSpec] getCpspecsByPartId(partId)

get a cpspec list in thie workpiece

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.CpSpecApi();

let partId = "partId_example"; // String | the Workpiece PartId

apiInstance.getCpspecsByPartId(partId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partId** | **String**| the Workpiece PartId | 

### Return type

[**[CpSpec]**](CpSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="updateCpspec"></a>
# **updateCpspec**
> CpSpec updateCpspec(specIdcpspec)

modify a cpspec

### Example
```javascript
import ProinApi from 'proin.api';

let apiInstance = new ProinApi.CpSpecApi();

let specId = "specId_example"; // String | The CpSpec Id

let cpspec = new ProinApi.CpSpec(); // CpSpec | 

apiInstance.updateCpspec(specIdcpspec).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **specId** | **String**| The CpSpec Id | 
 **cpspec** | [**CpSpec**](CpSpec.md)|  | 

### Return type

[**CpSpec**](CpSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

