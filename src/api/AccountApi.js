/**
 * ProIn.WebApi
 * This is a ProIn data access WebApi
 *
 * OpenAPI spec version: 1.0.0
 * Contact: zwq00000@hotmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import LoginInfo from '../model/LoginInfo';
import UserInfo from '../model/UserInfo';

/**
* Account service.
* @module api/AccountApi
* @version 1.0.0
*/
export default class AccountApi {

    /**
    * Constructs a new AccountApi. 
    * @alias module:api/AccountApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 获取当前用户信息
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserInfo} and HTTP response
     */
    getUserInfoWithHttpInfo(token) {
      let postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling getUserInfo");
      }


      let pathParams = {
      };
      let queryParams = {
        'token': token
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = UserInfo;

      return this.apiClient.callApi(
        '/account/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获取当前用户信息
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserInfo}
     */
    getUserInfo(token) {
      return this.getUserInfoWithHttpInfo(token)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 用户登录
     * @param {Object} opts Optional parameters
     * @param {module:model/LoginInfo} opts.loginInfo 登录信息
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserInfo} and HTTP response
     */
    loginWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['loginInfo'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = UserInfo;

      return this.apiClient.callApi(
        '/account/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 用户登录
     * @param {Object} opts Optional parameters
     * @param {module:model/LoginInfo} opts.loginInfo 登录信息
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserInfo}
     */
    login(opts) {
      return this.loginWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 用户注销
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    logoutWithHttpInfo(token) {
      let postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling logout");
      }


      let pathParams = {
      };
      let queryParams = {
        'token': token
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/account/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 用户注销
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    logout(token) {
      return this.logoutWithHttpInfo(token)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
