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
* The CpSpec model module.
* @module model/CpSpec
* @version 1.0.0
*/
export default class CpSpec {
    /**
    * Constructs a new <code>CpSpec</code>.
    * 检测项定义
    * @alias module:model/CpSpec
    * @class
    * @param specId {String} 测量项目ID
    * @param specName {String} 项目名称
    */

    constructor(specId, specName) {
        

        
        

        this['SpecId'] = specId;this['SpecName'] = specName;

        
    }

    /**
    * Constructs a <code>CpSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CpSpec} obj Optional instance to populate.
    * @return {module:model/CpSpec} The populated <code>CpSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CpSpec();

            
            
            

            if (data.hasOwnProperty('SpecId')) {
                obj['SpecId'] = ApiClient.convertToType(data['SpecId'], 'String');
            }
            if (data.hasOwnProperty('OrderNo')) {
                obj['OrderNo'] = ApiClient.convertToType(data['OrderNo'], 'Number');
            }
            if (data.hasOwnProperty('SpecName')) {
                obj['SpecName'] = ApiClient.convertToType(data['SpecName'], 'String');
            }
            if (data.hasOwnProperty('PartId')) {
                obj['PartId'] = ApiClient.convertToType(data['PartId'], 'String');
            }
            if (data.hasOwnProperty('Standard')) {
                obj['Standard'] = ApiClient.convertToType(data['Standard'], 'String');
            }
            if (data.hasOwnProperty('GageType')) {
                obj['GageType'] = ApiClient.convertToType(data['GageType'], 'String');
            }
            if (data.hasOwnProperty('ValueType')) {
                obj['ValueType'] = ApiClient.convertToType(data['ValueType'], 'String');
            }
            if (data.hasOwnProperty('Precision')) {
                obj['Precision'] = ApiClient.convertToType(data['Precision'], 'Number');
            }
            if (data.hasOwnProperty('Units')) {
                obj['Units'] = ApiClient.convertToType(data['Units'], 'String');
            }
            if (data.hasOwnProperty('ToleranceDefine')) {
                obj['ToleranceDefine'] = ApiClient.convertToType(data['ToleranceDefine'], 'String');
            }
            if (data.hasOwnProperty('Instruction')) {
                obj['Instruction'] = ApiClient.convertToType(data['Instruction'], 'String');
            }
            if (data.hasOwnProperty('Usl')) {
                obj['Usl'] = ApiClient.convertToType(data['Usl'], 'Number');
            }
            if (data.hasOwnProperty('Lsl')) {
                obj['Lsl'] = ApiClient.convertToType(data['Lsl'], 'Number');
            }
            if (data.hasOwnProperty('M')) {
                obj['M'] = ApiClient.convertToType(data['M'], 'Number');
            }
            if (data.hasOwnProperty('T')) {
                obj['T'] = ApiClient.convertToType(data['T'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 测量项目ID
    * @member {String} SpecId
    */
    SpecId = undefined;
    /**
    * 默认顺序号，该检测项在任务中的排序
    * @member {Number} OrderNo
    */
    OrderNo = undefined;
    /**
    * 项目名称
    * @member {String} SpecName
    */
    SpecName = undefined;
    /**
    * 产品Id
    * @member {String} PartId
    */
    PartId = undefined;
    /**
    * 测量标准规范编号
    * @member {String} Standard
    */
    Standard = undefined;
    /**
    * 千分表/千分尺..
    * @member {String} GageType
    */
    GageType = undefined;
    /**
    * 逻辑型或者 数值型
    * @member {module:model/CpSpec.ValueTypeEnum} ValueType
    */
    ValueType = undefined;
    /**
    * 测量精度，小数点后保留位数
    * @member {Number} Precision
    */
    Precision = undefined;
    /**
    * 测量单位 mm/N...
    * @member {String} Units
    */
    Units = undefined;
    /**
    * 公差定义
    * @member {String} ToleranceDefine
    */
    ToleranceDefine = undefined;
    /**
    * 操作说明
    * @member {String} Instruction
    */
    Instruction = undefined;
    /**
    * 公差上限
    * @member {Number} Usl
    */
    Usl = undefined;
    /**
    * 公差下限
    * @member {Number} Lsl
    */
    Lsl = undefined;
    /**
    * 中心值
    * @member {Number} M
    */
    M = undefined;
    /**
    * 目标值
    * @member {Number} T
    */
    T = undefined;






    /**
    * Allowed values for the <code>ValueType</code> property.
    * @enum {String}
    * @readonly
    */
    static ValueTypeEnum = {
    
        /**
         * value: "Number"
         * @const
         */
        "Number": "Number",
    
        /**
         * value: "Logic"
         * @const
         */
        "Logic": "Logic"    
    };



}

