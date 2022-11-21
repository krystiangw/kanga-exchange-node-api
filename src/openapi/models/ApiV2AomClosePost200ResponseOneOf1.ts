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
 * AOM not found or active
 * @export
 * @interface ApiV2AomClosePost200ResponseOneOf1
 */
export interface ApiV2AomClosePost200ResponseOneOf1 {
    /**
     * 
     * @type {string}
     * @memberof ApiV2AomClosePost200ResponseOneOf1
     */
    result: ApiV2AomClosePost200ResponseOneOf1ResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiV2AomClosePost200ResponseOneOf1
     */
    code: ApiV2AomClosePost200ResponseOneOf1CodeEnum;
}


/**
 * @export
 */
export const ApiV2AomClosePost200ResponseOneOf1ResultEnum = {
    Fail: 'fail'
} as const;
export type ApiV2AomClosePost200ResponseOneOf1ResultEnum = typeof ApiV2AomClosePost200ResponseOneOf1ResultEnum[keyof typeof ApiV2AomClosePost200ResponseOneOf1ResultEnum];

/**
 * @export
 */
export const ApiV2AomClosePost200ResponseOneOf1CodeEnum = {
    NUMBER_9000: 9000
} as const;
export type ApiV2AomClosePost200ResponseOneOf1CodeEnum = typeof ApiV2AomClosePost200ResponseOneOf1CodeEnum[keyof typeof ApiV2AomClosePost200ResponseOneOf1CodeEnum];


/**
 * Check if a given object implements the ApiV2AomClosePost200ResponseOneOf1 interface.
 */
export function instanceOfApiV2AomClosePost200ResponseOneOf1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiV2AomClosePost200ResponseOneOf1FromJSON(json: any): ApiV2AomClosePost200ResponseOneOf1 {
    return ApiV2AomClosePost200ResponseOneOf1FromJSONTyped(json, false);
}

export function ApiV2AomClosePost200ResponseOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomClosePost200ResponseOneOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiV2AomClosePost200ResponseOneOf1ToJSON(value?: ApiV2AomClosePost200ResponseOneOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'code': value.code,
    };
}
