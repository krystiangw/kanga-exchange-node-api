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
 * @interface ApiV2LabelUnassignPostRequest
 */
export interface ApiV2LabelUnassignPostRequest {
    /**
     * A unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2LabelUnassignPostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2LabelUnassignPostRequest
     */
    appId: string;
    /**
     * App user ID
     * @type {string}
     * @memberof ApiV2LabelUnassignPostRequest
     */
    appUserId: string;
    /**
     * Label ID
     * @type {string}
     * @memberof ApiV2LabelUnassignPostRequest
     */
    labelId: string;
}

/**
 * Check if a given object implements the ApiV2LabelUnassignPostRequest interface.
 */
export function instanceOfApiV2LabelUnassignPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "appUserId" in value;
    isInstance = isInstance && "labelId" in value;

    return isInstance;
}

export function ApiV2LabelUnassignPostRequestFromJSON(json: any): ApiV2LabelUnassignPostRequest {
    return ApiV2LabelUnassignPostRequestFromJSONTyped(json, false);
}

export function ApiV2LabelUnassignPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2LabelUnassignPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonce': json['nonce'],
        'appId': json['appId'],
        'appUserId': json['appUserId'],
        'labelId': json['labelId'],
    };
}

export function ApiV2LabelUnassignPostRequestToJSON(value?: ApiV2LabelUnassignPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonce': value.nonce,
        'appId': value.appId,
        'appUserId': value.appUserId,
        'labelId': value.labelId,
    };
}

