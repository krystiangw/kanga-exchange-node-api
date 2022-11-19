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
 * Transaction not found
 * @export
 * @interface ApiV2PayPaymentGetPost200ResponseOneOf4
 */
export interface ApiV2PayPaymentGetPost200ResponseOneOf4 {
    /**
     * 
     * @type {string}
     * @memberof ApiV2PayPaymentGetPost200ResponseOneOf4
     */
    result: ApiV2PayPaymentGetPost200ResponseOneOf4ResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiV2PayPaymentGetPost200ResponseOneOf4
     */
    code: ApiV2PayPaymentGetPost200ResponseOneOf4CodeEnum;
}


/**
 * @export
 */
export const ApiV2PayPaymentGetPost200ResponseOneOf4ResultEnum = {
    Fail: 'fail'
} as const;
export type ApiV2PayPaymentGetPost200ResponseOneOf4ResultEnum = typeof ApiV2PayPaymentGetPost200ResponseOneOf4ResultEnum[keyof typeof ApiV2PayPaymentGetPost200ResponseOneOf4ResultEnum];

/**
 * @export
 */
export const ApiV2PayPaymentGetPost200ResponseOneOf4CodeEnum = {
    NUMBER_9000: 9000
} as const;
export type ApiV2PayPaymentGetPost200ResponseOneOf4CodeEnum = typeof ApiV2PayPaymentGetPost200ResponseOneOf4CodeEnum[keyof typeof ApiV2PayPaymentGetPost200ResponseOneOf4CodeEnum];


/**
 * Check if a given object implements the ApiV2PayPaymentGetPost200ResponseOneOf4 interface.
 */
export function instanceOfApiV2PayPaymentGetPost200ResponseOneOf4(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiV2PayPaymentGetPost200ResponseOneOf4FromJSON(json: any): ApiV2PayPaymentGetPost200ResponseOneOf4 {
    return ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped(json, false);
}

export function ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayPaymentGetPost200ResponseOneOf4 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiV2PayPaymentGetPost200ResponseOneOf4ToJSON(value?: ApiV2PayPaymentGetPost200ResponseOneOf4 | null): any {
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

