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
 * PaymentId not unique
 * @export
 * @interface ApiV2PayPaymentCreatePost200ResponseOneOf5
 */
export interface ApiV2PayPaymentCreatePost200ResponseOneOf5 {
    /**
     * 
     * @type {string}
     * @memberof ApiV2PayPaymentCreatePost200ResponseOneOf5
     */
    result: ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiV2PayPaymentCreatePost200ResponseOneOf5
     */
    code: ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum;
}


/**
 * @export
 */
export const ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum = {
    Fail: 'fail'
} as const;
export type ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum = typeof ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum[keyof typeof ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum];

/**
 * @export
 */
export const ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum = {
    NUMBER_9005: 9005
} as const;
export type ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum = typeof ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum[keyof typeof ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum];


/**
 * Check if a given object implements the ApiV2PayPaymentCreatePost200ResponseOneOf5 interface.
 */
export function instanceOfApiV2PayPaymentCreatePost200ResponseOneOf5(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiV2PayPaymentCreatePost200ResponseOneOf5FromJSON(json: any): ApiV2PayPaymentCreatePost200ResponseOneOf5 {
    return ApiV2PayPaymentCreatePost200ResponseOneOf5FromJSONTyped(json, false);
}

export function ApiV2PayPaymentCreatePost200ResponseOneOf5FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayPaymentCreatePost200ResponseOneOf5 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiV2PayPaymentCreatePost200ResponseOneOf5ToJSON(value?: ApiV2PayPaymentCreatePost200ResponseOneOf5 | null): any {
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
