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
 * @interface ApiV2AomListPostRequest
 */
export interface ApiV2AomListPostRequest {
    /**
     * Unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2AomListPostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2AomListPostRequest
     */
    appId: string;
}

/**
 * Check if a given object implements the ApiV2AomListPostRequest interface.
 */
export function instanceOfApiV2AomListPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;

    return isInstance;
}

export function ApiV2AomListPostRequestFromJSON(json: any): ApiV2AomListPostRequest {
    return ApiV2AomListPostRequestFromJSONTyped(json, false);
}

export function ApiV2AomListPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomListPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonce': json['nonce'],
        'appId': json['appId'],
    };
}

export function ApiV2AomListPostRequestToJSON(value?: ApiV2AomListPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonce': value.nonce,
        'appId': value.appId,
    };
}

