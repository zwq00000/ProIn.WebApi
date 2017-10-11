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
import ModelStateDictionary from '../model/ModelStateDictionary';
import PagedWorkpieces from '../model/PagedWorkpieces';
import Workpiece from '../model/Workpiece';

/**
* Workpiece service.
* @module api/WorkpieceApi
* @version 1.0.0
*/
export default class WorkpieceApi {

    /**
    * Constructs a new WorkpieceApi. 
    * @alias module:api/WorkpieceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 提交一个新的工件信息
     * Adds a new workpiece to the workpieces list.
     * @param {Object} opts Optional parameters
     * @param {module:model/Workpiece} opts.workpiece The workpiece to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workpiece} and HTTP response
     */
    createWorkpieceWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['workpiece'];


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
      let returnType = Workpiece;

      return this.apiClient.callApi(
        '/workpieces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 提交一个新的工件信息
     * Adds a new workpiece to the workpieces list.
     * @param {Object} opts Optional parameters
     * @param {module:model/Workpiece} opts.workpiece The workpiece to create.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workpiece}
     */
    createWorkpiece(opts) {
      return this.createWorkpieceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete a workpiece
     * @param {String} partId The Workpiece PartId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkpieceWithHttpInfo(partId) {
      let postBody = null;

      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling deleteWorkpiece");
      }


      let pathParams = {
        'partId': partId
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
      let returnType = null;

      return this.apiClient.callApi(
        '/workpieces/{partId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * delete a workpiece
     * @param {String} partId The Workpiece PartId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorkpiece(partId) {
      return this.deleteWorkpieceWithHttpInfo(partId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get a workpiece
     * return a single workpiece for its partId
     * @param {String} partId The Workpiece PartId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workpiece} and HTTP response
     */
    getWorkpieceWithHttpInfo(partId) {
      let postBody = null;

      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling getWorkpiece");
      }


      let pathParams = {
        'partId': partId
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
      let returnType = Workpiece;

      return this.apiClient.callApi(
        '/workpieces/{partId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * get a workpiece
     * return a single workpiece for its partId
     * @param {String} partId The Workpiece PartId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workpiece}
     */
    getWorkpiece(partId) {
      return this.getWorkpieceWithHttpInfo(partId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 获得一个分页的工件列表
     * Returns a list of all workpieces,the list supports paging.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize 页面大小 (default to 20)
     * @param {Number} opts.pageNumber 页码，从 0 开始 (default to 0)
     * @param {String} opts.searchStr 搜索关键词
     * @param {String} opts.category 工件分类名称
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PagedWorkpieces} and HTTP response
     */
    getWorkpiecesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'pageNumber': opts['pageNumber'],
        'searchStr': opts['searchStr'],
        'category': opts['category']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = PagedWorkpieces;

      return this.apiClient.callApi(
        '/workpieces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获得一个分页的工件列表
     * Returns a list of all workpieces,the list supports paging.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize 页面大小 (default to 20)
     * @param {Number} opts.pageNumber 页码，从 0 开始 (default to 0)
     * @param {String} opts.searchStr 搜索关键词
     * @param {String} opts.category 工件分类名称
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PagedWorkpieces}
     */
    getWorkpieces(opts) {
      return this.getWorkpiecesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 修改并更新一个 Workpiece 实例
     * @param {module:model/Workpiece} workpiece 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workpiece} and HTTP response
     */
    updateWorkpieceWithHttpInfo(workpiece) {
      let postBody = workpiece;

      // verify the required parameter 'workpiece' is set
      if (workpiece === undefined || workpiece === null) {
        throw new Error("Missing the required parameter 'workpiece' when calling updateWorkpiece");
      }


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
      let returnType = Workpiece;

      return this.apiClient.callApi(
        '/workpieces', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 修改并更新一个 Workpiece 实例
     * @param {module:model/Workpiece} workpiece 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workpiece}
     */
    updateWorkpiece(workpiece) {
      return this.updateWorkpieceWithHttpInfo(workpiece)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
