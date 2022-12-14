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
 * Distribution group not found
 * @export
 * @interface ApiV2DistributionCreatePost200ResponseOneOf7
 */
export interface ApiV2DistributionCreatePost200ResponseOneOf7 {
    /**
     * 
     * @type {string}
     * @memberof ApiV2DistributionCreatePost200ResponseOneOf7
     */
    result: ApiV2DistributionCreatePost200ResponseOneOf7ResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiV2DistributionCreatePost200ResponseOneOf7
     */
    code: ApiV2DistributionCreatePost200ResponseOneOf7CodeEnum;
}


/**
 * @export
 */
export const ApiV2DistributionCreatePost200ResponseOneOf7ResultEnum = {
    Fail: 'fail'
} as const;
export type ApiV2DistributionCreatePost200ResponseOneOf7ResultEnum = typeof ApiV2DistributionCreatePost200ResponseOneOf7ResultEnum[keyof typeof ApiV2DistributionCreatePost200ResponseOneOf7ResultEnum];

/**
 * @export
 */
export const ApiV2DistributionCreatePost200ResponseOneOf7CodeEnum = {
    NUMBER_9007: 9007
} as const;
export type ApiV2DistributionCreatePost200ResponseOneOf7CodeEnum = typeof ApiV2DistributionCreatePost200ResponseOneOf7CodeEnum[keyof typeof ApiV2DistributionCreatePost200ResponseOneOf7CodeEnum];


/**
 * Check if a given object implements the ApiV2DistributionCreatePost200ResponseOneOf7 interface.
 */
export function instanceOfApiV2DistributionCreatePost200ResponseOneOf7(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiV2DistributionCreatePost200ResponseOneOf7FromJSON(json: any): ApiV2DistributionCreatePost200ResponseOneOf7 {
    return ApiV2DistributionCreatePost200ResponseOneOf7FromJSONTyped(json, false);
}

export function ApiV2DistributionCreatePost200ResponseOneOf7FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionCreatePost200ResponseOneOf7 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiV2DistributionCreatePost200ResponseOneOf7ToJSON(value?: ApiV2DistributionCreatePost200ResponseOneOf7 | null): any {
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

