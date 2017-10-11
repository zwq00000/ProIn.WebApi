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
* The User model module.
* @module model/User
* @version 1.0.0
*/
export default class User {
    /**
    * Constructs a new <code>User</code>.
    * @alias module:model/User
    * @class
    * @param userId {String} 
    * @param userName {String} 
    * @param fullName {String} 
    */

    constructor(userId, userName, fullName) {
        

        
        

        this['UserId'] = userId;this['UserName'] = userName;this['FullName'] = fullName;

        
    }

    /**
    * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/User} obj Optional instance to populate.
    * @return {module:model/User} The populated <code>User</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            
            
            

            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'String');
            }
            if (data.hasOwnProperty('UserName')) {
                obj['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
            }
            if (data.hasOwnProperty('FullName')) {
                obj['FullName'] = ApiClient.convertToType(data['FullName'], 'String');
            }
            if (data.hasOwnProperty('Avatar')) {
                obj['Avatar'] = ApiClient.convertToType(data['Avatar'], 'String');
            }
            if (data.hasOwnProperty('DepName')) {
                obj['DepName'] = ApiClient.convertToType(data['DepName'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], 'String');
            }
            if (data.hasOwnProperty('Email')) {
                obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
            }
            if (data.hasOwnProperty('CreateDate')) {
                obj['CreateDate'] = ApiClient.convertToType(data['CreateDate'], 'Date');
            }
            if (data.hasOwnProperty('LastLoginDate')) {
                obj['LastLoginDate'] = ApiClient.convertToType(data['LastLoginDate'], 'Date');
            }
        }
        return obj;
    }

    /**
    * @member {String} UserId
    */
    UserId = undefined;
    /**
    * @member {String} UserName
    */
    UserName = undefined;
    /**
    * @member {String} FullName
    */
    FullName = undefined;
    /**
    * @member {String} Avatar
    */
    Avatar = undefined;
    /**
    * @member {String} DepName
    */
    DepName = undefined;
    /**
    * 使用 ',' 分隔的用户角色
    * @member {String} roles
    */
    roles = undefined;
    /**
    * @member {String} Email
    */
    Email = undefined;
    /**
    * @member {Date} CreateDate
    */
    CreateDate = undefined;
    /**
    * @member {Date} LastLoginDate
    */
    LastLoginDate = undefined;








}


