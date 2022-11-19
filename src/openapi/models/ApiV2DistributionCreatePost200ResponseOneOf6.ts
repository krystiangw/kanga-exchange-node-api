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
 * Invalid user app ID
 * @export
 * @interface ApiV2DistributionCreatePost200ResponseOneOf6
 */
export interface ApiV2DistributionCreatePost200ResponseOneOf6 {
    /**
     * 
     * @type {string}
     * @memberof ApiV2DistributionCreatePost200ResponseOneOf6
     */
    result: ApiV2DistributionCreatePost200ResponseOneOf6ResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiV2DistributionCreatePost200ResponseOneOf6
     */
    code: ApiV2DistributionCreatePost200ResponseOneOf6CodeEnum;
}


/**
 * @export
 */
export const ApiV2DistributionCreatePost200ResponseOneOf6ResultEnum = {
    Fail: 'fail'
} as const;
export type ApiV2DistributionCreatePost200ResponseOneOf6ResultEnum = typeof ApiV2DistributionCreatePost200ResponseOneOf6ResultEnum[keyof typeof ApiV2DistributionCreatePost200ResponseOneOf6ResultEnum];

/**
 * @export
 */
export const ApiV2DistributionCreatePost200ResponseOneOf6CodeEnum = {
    NUMBER_9006: 9006
} as const;
export type ApiV2DistributionCreatePost200ResponseOneOf6CodeEnum = typeof ApiV2DistributionCreatePost200ResponseOneOf6CodeEnum[keyof typeof ApiV2DistributionCreatePost200ResponseOneOf6CodeEnum];


/**
 * Check if a given object implements the ApiV2DistributionCreatePost200ResponseOneOf6 interface.
 */
export function instanceOfApiV2DistributionCreatePost200ResponseOneOf6(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiV2DistributionCreatePost200ResponseOneOf6FromJSON(json: any): ApiV2DistributionCreatePost200ResponseOneOf6 {
    return ApiV2DistributionCreatePost200ResponseOneOf6FromJSONTyped(json, false);
}

export function ApiV2DistributionCreatePost200ResponseOneOf6FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionCreatePost200ResponseOneOf6 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiV2DistributionCreatePost200ResponseOneOf6ToJSON(value?: ApiV2DistributionCreatePost200ResponseOneOf6 | null): any {
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

