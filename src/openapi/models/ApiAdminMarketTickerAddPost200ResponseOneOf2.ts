/* tslint:disable */
/* eslint-disable */
/**
 * Kanga.exchange API
 * This is API generated from kanga.exchange code.
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
 * Market already added
 * @export
 * @interface ApiAdminMarketTickerAddPost200ResponseOneOf2
 */
export interface ApiAdminMarketTickerAddPost200ResponseOneOf2 {
    /**
     * 
     * @type {string}
     * @memberof ApiAdminMarketTickerAddPost200ResponseOneOf2
     */
    result: ApiAdminMarketTickerAddPost200ResponseOneOf2ResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiAdminMarketTickerAddPost200ResponseOneOf2
     */
    code: ApiAdminMarketTickerAddPost200ResponseOneOf2CodeEnum;
}


/**
 * @export
 */
export const ApiAdminMarketTickerAddPost200ResponseOneOf2ResultEnum = {
    Fail: 'fail'
} as const;
export type ApiAdminMarketTickerAddPost200ResponseOneOf2ResultEnum = typeof ApiAdminMarketTickerAddPost200ResponseOneOf2ResultEnum[keyof typeof ApiAdminMarketTickerAddPost200ResponseOneOf2ResultEnum];

/**
 * @export
 */
export const ApiAdminMarketTickerAddPost200ResponseOneOf2CodeEnum = {
    NUMBER_9001: 9001
} as const;
export type ApiAdminMarketTickerAddPost200ResponseOneOf2CodeEnum = typeof ApiAdminMarketTickerAddPost200ResponseOneOf2CodeEnum[keyof typeof ApiAdminMarketTickerAddPost200ResponseOneOf2CodeEnum];


/**
 * Check if a given object implements the ApiAdminMarketTickerAddPost200ResponseOneOf2 interface.
 */
export function instanceOfApiAdminMarketTickerAddPost200ResponseOneOf2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiAdminMarketTickerAddPost200ResponseOneOf2FromJSON(json: any): ApiAdminMarketTickerAddPost200ResponseOneOf2 {
    return ApiAdminMarketTickerAddPost200ResponseOneOf2FromJSONTyped(json, false);
}

export function ApiAdminMarketTickerAddPost200ResponseOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiAdminMarketTickerAddPost200ResponseOneOf2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiAdminMarketTickerAddPost200ResponseOneOf2ToJSON(value?: ApiAdminMarketTickerAddPost200ResponseOneOf2 | null): any {
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
