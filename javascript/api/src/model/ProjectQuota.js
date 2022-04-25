/**
 * Arm API
 * REST API to manage your virtual devices.
 *
 * The version of the OpenAPI document: 3.9.0-13085
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProjectQuota model module.
 * @module model/ProjectQuota
 * @version 1.0.1
 */
class ProjectQuota {
    /**
     * Constructs a new <code>ProjectQuota</code>.
     * @alias module:model/ProjectQuota
     */
    constructor() { 
        
        ProjectQuota.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectQuota</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectQuota} obj Optional instance to populate.
     * @return {module:model/ProjectQuota} The populated <code>ProjectQuota</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectQuota();

            if (data.hasOwnProperty('cores')) {
                obj['cores'] = ApiClient.convertToType(data['cores'], 'Number');
            }
            if (data.hasOwnProperty('instances')) {
                obj['instances'] = ApiClient.convertToType(data['instances'], 'Number');
            }
            if (data.hasOwnProperty('ram')) {
                obj['ram'] = ApiClient.convertToType(data['ram'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cores
 */
ProjectQuota.prototype['cores'] = undefined;

/**
 * @member {Number} instances
 */
ProjectQuota.prototype['instances'] = undefined;

/**
 * @member {Number} ram
 */
ProjectQuota.prototype['ram'] = undefined;






export default ProjectQuota;

