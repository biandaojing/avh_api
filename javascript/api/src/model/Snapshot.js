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
import SnapshotStatus from './SnapshotStatus';

/**
 * The Snapshot model module.
 * @module model/Snapshot
 * @version 1.0.1
 */
class Snapshot {
    /**
     * Constructs a new <code>Snapshot</code>.
     * @alias module:model/Snapshot
     */
    constructor() { 
        
        Snapshot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Snapshot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Snapshot} obj Optional instance to populate.
     * @return {module:model/Snapshot} The populated <code>Snapshot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Snapshot();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SnapshotStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Number');
            }
            if (data.hasOwnProperty('fresh')) {
                obj['fresh'] = ApiClient.convertToType(data['fresh'], 'Boolean');
            }
            if (data.hasOwnProperty('live')) {
                obj['live'] = ApiClient.convertToType(data['live'], 'Boolean');
            }
            if (data.hasOwnProperty('local')) {
                obj['local'] = ApiClient.convertToType(data['local'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Snapshot ID
 * @member {String} id
 */
Snapshot.prototype['id'] = undefined;

/**
 * Snapshot name
 * @member {String} name
 */
Snapshot.prototype['name'] = undefined;

/**
 * Instance that this snapshot is of
 * @member {String} instance
 */
Snapshot.prototype['instance'] = undefined;

/**
 * @member {module:model/SnapshotStatus} status
 */
Snapshot.prototype['status'] = undefined;

/**
 * UNIX Date that the snapshot was created
 * @member {Number} date
 */
Snapshot.prototype['date'] = undefined;

/**
 * @member {Boolean} fresh
 */
Snapshot.prototype['fresh'] = undefined;

/**
 * Live snapshot (included state and memory)
 * @member {Boolean} live
 */
Snapshot.prototype['live'] = undefined;

/**
 * @member {Boolean} local
 */
Snapshot.prototype['local'] = undefined;






export default Snapshot;

