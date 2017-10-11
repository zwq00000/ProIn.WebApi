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
* The Error model module.
* @module model/Error
* @version 1.0.0
*/
export default class Error {
    /**
    * Constructs a new <code>Error</code>.
    * 通用的错误响应结果
    * @alias module:model/Error
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Error} obj Optional instance to populate.
    * @return {module:model/Error} The populated <code>Error</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();

            
            
            

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} code
    */
    code = undefined;
    /**
    * @member {String} message
    */
    message = undefined;








}


