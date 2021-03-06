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
import Paging from './Paging';
import User from './User';





/**
* The PagedUsers model module.
* @module model/PagedUsers
* @version 1.0.0
*/
export default class PagedUsers {
    /**
    * Constructs a new <code>PagedUsers</code>.
    * 用户信息分页列表
    * @alias module:model/PagedUsers
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PagedUsers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PagedUsers} obj Optional instance to populate.
    * @return {module:model/PagedUsers} The populated <code>PagedUsers</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PagedUsers();

            
            
            

            if (data.hasOwnProperty('paging')) {
                obj['paging'] = Paging.constructFromObject(data['paging']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [User]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Paging} paging
    */
    paging = undefined;
    /**
    * @member {Array.<module:model/User>} data
    */
    data = undefined;








}


