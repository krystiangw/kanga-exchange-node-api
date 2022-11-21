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
 * @interface ApiV2AomGetPostRequest
 */
export interface ApiV2AomGetPostRequest {
    /**
     * Unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2AomGetPostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2AomGetPostRequest
     */
    appId: string;
    /**
     * Order maker ID.
     * @type {string}
     * @memberof ApiV2AomGetPostRequest
     */
    aomId: string;
}

/**
 * Check if a given object implements the ApiV2AomGetPostRequest interface.
 */
export function instanceOfApiV2AomGetPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "aomId" in value;

    return isInstance;
}

export function ApiV2AomGetPostRequestFromJSON(json: any): ApiV2AomGetPostRequest {
    return ApiV2AomGetPostRequestFromJSONTyped(json, false);
}

export function ApiV2AomGetPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomGetPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonce': json['nonce'],
        'appId': json['appId'],
        'aomId': json['aomId'],
    };
}

export function ApiV2AomGetPostRequestToJSON(value?: ApiV2AomGetPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonce': value.nonce,
        'appId': value.appId,
        'aomId': value.aomId,
    };
}
