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
 * 
 * @export
 * @interface ApiAdminMarketTickerAddPostRequest
 */
export interface ApiAdminMarketTickerAddPostRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiAdminMarketTickerAddPostRequest
     */
    marketId: string;
}

/**
 * Check if a given object implements the ApiAdminMarketTickerAddPostRequest interface.
 */
export function instanceOfApiAdminMarketTickerAddPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "marketId" in value;

    return isInstance;
}

export function ApiAdminMarketTickerAddPostRequestFromJSON(json: any): ApiAdminMarketTickerAddPostRequest {
    return ApiAdminMarketTickerAddPostRequestFromJSONTyped(json, false);
}

export function ApiAdminMarketTickerAddPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiAdminMarketTickerAddPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'marketId': json['marketId'],
    };
}

export function ApiAdminMarketTickerAddPostRequestToJSON(value?: ApiAdminMarketTickerAddPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'marketId': value.marketId,
    };
}

