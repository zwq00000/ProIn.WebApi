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
import Workpiece from './Workpiece';





/**
* The PagedWorkpieces model module.
* @module model/PagedWorkpieces
* @version 1.0.0
*/
export default class PagedWorkpieces {
    /**
    * Constructs a new <code>PagedWorkpieces</code>.
    * @alias module:model/PagedWorkpieces
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PagedWorkpieces</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PagedWorkpieces} obj Optional instance to populate.
    * @return {module:model/PagedWorkpieces} The populated <code>PagedWorkpieces</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PagedWorkpieces();

            
            
            

            if (data.hasOwnProperty('paging')) {
                obj['paging'] = Paging.constructFromObject(data['paging']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Workpiece]);
            }
        }
        return obj;
    }

    /**
    * 分页数据
    * @member {module:model/Paging} paging
    */
    paging = undefined;
    /**
    * 工件集合
    * @member {Array.<module:model/Workpiece>} data
    */
    data = undefined;








}

