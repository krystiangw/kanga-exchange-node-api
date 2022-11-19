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
 * Shop onboarding in progress
 * @export
 * @interface ApiV2PayPaymentCreatePost200ResponseOneOf3
 */
export interface ApiV2PayPaymentCreatePost200ResponseOneOf3 {
    /**
     * 
     * @type {string}
     * @memberof ApiV2PayPaymentCreatePost200ResponseOneOf3
     */
    result: ApiV2PayPaymentCreatePost200ResponseOneOf3ResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiV2PayPaymentCreatePost200ResponseOneOf3
     */
    code: ApiV2PayPaymentCreatePost200ResponseOneOf3CodeEnum;
}


/**
 * @export
 */
export const ApiV2PayPaymentCreatePost200ResponseOneOf3ResultEnum = {
    Fail: 'fail'
} as const;
export type ApiV2PayPaymentCreatePost200ResponseOneOf3ResultEnum = typeof ApiV2PayPaymentCreatePost200ResponseOneOf3ResultEnum[keyof typeof ApiV2PayPaymentCreatePost200ResponseOneOf3ResultEnum];

/**
 * @export
 */
export const ApiV2PayPaymentCreatePost200ResponseOneOf3CodeEnum = {
    NUMBER_9003: 9003
} as const;
export type ApiV2PayPaymentCreatePost200ResponseOneOf3CodeEnum = typeof ApiV2PayPaymentCreatePost200ResponseOneOf3CodeEnum[keyof typeof ApiV2PayPaymentCreatePost200ResponseOneOf3CodeEnum];


/**
 * Check if a given object implements the ApiV2PayPaymentCreatePost200ResponseOneOf3 interface.
 */
export function instanceOfApiV2PayPaymentCreatePost200ResponseOneOf3(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiV2PayPaymentCreatePost200ResponseOneOf3FromJSON(json: any): ApiV2PayPaymentCreatePost200ResponseOneOf3 {
    return ApiV2PayPaymentCreatePost200ResponseOneOf3FromJSONTyped(json, false);
}

export function ApiV2PayPaymentCreatePost200ResponseOneOf3FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayPaymentCreatePost200ResponseOneOf3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiV2PayPaymentCreatePost200ResponseOneOf3ToJSON(value?: ApiV2PayPaymentCreatePost200ResponseOneOf3 | null): any {
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

