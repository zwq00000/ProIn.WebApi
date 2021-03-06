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
import MeasureValue from '../model/MeasureValue';

/**
* MeasureValue service.
* @module api/MeasureValueApi
* @version 1.0.0
*/
export default class MeasureValueApi {

    /**
    * Constructs a new MeasureValueApi. 
    * @alias module:api/MeasureValueApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 获取测量值(数值集合)
     * @param {String} specId 检测项Id
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate 开始日期
     * @param {Date} opts.endDate 结束日期
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MeasureValue} and HTTP response
     */
    getMeasureValueWithHttpInfo(specId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'specId' is set
      if (specId === undefined || specId === null) {
        throw new Error("Missing the required parameter 'specId' when calling getMeasureValue");
      }


      let pathParams = {
        'specId': specId
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = MeasureValue;

      return this.apiClient.callApi(
        '/measureValue/{specId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * 获取测量值(数值集合)
     * @param {String} specId 检测项Id
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate 开始日期
     * @param {Date} opts.endDate 结束日期
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MeasureValue}
     */
    getMeasureValue(specId, opts) {
      return this.getMeasureValueWithHttpInfo(specId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
