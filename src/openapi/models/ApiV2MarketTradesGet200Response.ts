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
import type { ApiV2MarketTradesGet200ResponseTradesInner } from './ApiV2MarketTradesGet200ResponseTradesInner';
import {
    ApiV2MarketTradesGet200ResponseTradesInnerFromJSON,
    ApiV2MarketTradesGet200ResponseTradesInnerFromJSONTyped,
    ApiV2MarketTradesGet200ResponseTradesInnerToJSON,
} from './ApiV2MarketTradesGet200ResponseTradesInner';

/**
 * Market trades
 * @export
 * @interface ApiV2MarketTradesGet200Response
 */
export interface ApiV2MarketTradesGet200Response {
    /**
     * 
     * @type {number}
     * @memberof ApiV2MarketTradesGet200Response
     */
    timestamp: number;
    /**
     * 
     * @type {Array<ApiV2MarketTradesGet200ResponseTradesInner>}
     * @memberof ApiV2MarketTradesGet200Response
     */
    trades: Array<ApiV2MarketTradesGet200ResponseTradesInner>;
}

/**
 * Check if a given object implements the ApiV2MarketTradesGet200Response interface.
 */
export function instanceOfApiV2MarketTradesGet200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "trades" in value;

    return isInstance;
}

export function ApiV2MarketTradesGet200ResponseFromJSON(json: any): ApiV2MarketTradesGet200Response {
    return ApiV2MarketTradesGet200ResponseFromJSONTyped(json, false);
}

export function ApiV2MarketTradesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketTradesGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'trades': ((json['trades'] as Array<any>).map(ApiV2MarketTradesGet200ResponseTradesInnerFromJSON)),
    };
}

export function ApiV2MarketTradesGet200ResponseToJSON(value?: ApiV2MarketTradesGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timestamp': value.timestamp,
        'trades': ((value.trades as Array<any>).map(ApiV2MarketTradesGet200ResponseTradesInnerToJSON)),
    };
}
