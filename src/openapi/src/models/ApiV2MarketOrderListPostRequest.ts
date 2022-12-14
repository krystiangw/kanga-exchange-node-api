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
 * @interface ApiV2MarketOrderListPostRequest
 */
export interface ApiV2MarketOrderListPostRequest {
    /**
     * 
     * @type {number}
     * @memberof ApiV2MarketOrderListPostRequest
     */
    nonce: number;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPostRequest
     */
    appId: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPostRequest
     */
    market: string;
    /**
     * 
     * @type {number}
     * @memberof ApiV2MarketOrderListPostRequest
     */
    limit?: number;
}

/**
 * Check if a given object implements the ApiV2MarketOrderListPostRequest interface.
 */
export function instanceOfApiV2MarketOrderListPostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "market" in value;

    return isInstance;
}

export function ApiV2MarketOrderListPostRequestFromJSON(json: any): ApiV2MarketOrderListPostRequest {
    return ApiV2MarketOrderListPostRequestFromJSONTyped(json, false);
}

export function ApiV2MarketOrderListPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderListPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonce': json['nonce'],
        'appId': json['appId'],
        'market': json['market'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
    };
}

export function ApiV2MarketOrderListPostRequestToJSON(value?: ApiV2MarketOrderListPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonce': value.nonce,
        'appId': value.appId,
        'market': value.market,
        'limit': value.limit,
    };
}

