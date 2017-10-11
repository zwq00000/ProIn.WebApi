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


import ApiClient from '../ApiClient';





/**
* The Paging model module.
* @module model/Paging
* @version 1.0.0
*/
export default class Paging {
    /**
    * Constructs a new <code>Paging</code>.
    * 分页显示的结果数据
    * @alias module:model/Paging
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Paging</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Paging} obj Optional instance to populate.
    * @return {module:model/Paging} The populated <code>Paging</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Paging();

            
            
            

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('pageCount')) {
                obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('currentPage')) {
                obj['currentPage'] = ApiClient.convertToType(data['currentPage'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 总数量
    * @member {Number} total
    * @default 0
    */
    total = 0;
    /**
    * 总页数
    * @member {Number} pageCount
    * @default 0
    */
    pageCount = 0;
    /**
    * 页面大小
    * @member {Number} pageSize
    * @default 20
    */
    pageSize = 20;
    /**
    * 当前页码
    * @member {Number} currentPage
    * @default 0
    */
    currentPage = 0;








}

