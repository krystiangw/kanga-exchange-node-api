/* tslint:disable */
/* eslint-disable */
/**
 * Kanga Exchange API
 * API documentation generated from Kanga Exchange source code.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@kanga.exchange
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiV2KposBalancesGetPostRequest
 */
export interface ApiV2KposBalancesGetPostRequest {
    /**
     * Unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2KposBalancesGetPostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2KposBalancesGetPostRequest
     */
    appId: string;
    /**
     * KPOS ID
     * @type {string}
     * @memberof ApiV2KposBalancesGetPostRequest
     */
    kposId: string;
}

/**
 * Check if a given object implements the ApiV2KposBalancesGetPostRequest interface.
 */
export function instanceOfApiV2KposBalancesGetPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "kposId" in value;

    return isInstance;
}

export function ApiV2KposBalancesGetPostRequestFromJSON(json: any): ApiV2KposBalancesGetPostRequest {
    return ApiV2KposBalancesGetPostRequestFromJSONTyped(json, false);
}

export function ApiV2KposBalancesGetPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2KposBalancesGetPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonce': json['nonce'],
        'appId': json['appId'],
        'kposId': json['kposId'],
    };
}

export function ApiV2KposBalancesGetPostRequestToJSON(value?: ApiV2KposBalancesGetPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonce': value.nonce,
        'appId': value.appId,
        'kposId': value.kposId,
    };
}
