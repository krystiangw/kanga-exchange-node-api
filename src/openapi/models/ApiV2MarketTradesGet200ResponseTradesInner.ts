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
 * @interface ApiV2MarketTradesGet200ResponseTradesInner
 */
export interface ApiV2MarketTradesGet200ResponseTradesInner {
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketTradesGet200ResponseTradesInner
     */
    tradeId: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketTradesGet200ResponseTradesInner
     */
    price: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketTradesGet200ResponseTradesInner
     */
    baseVolume: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketTradesGet200ResponseTradesInner
     */
    quoteVolume: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketTradesGet200ResponseTradesInner
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof ApiV2MarketTradesGet200ResponseTradesInner
     */
    timestamp: number;
}

/**
 * Check if a given object implements the ApiV2MarketTradesGet200ResponseTradesInner interface.
 */
export function instanceOfApiV2MarketTradesGet200ResponseTradesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tradeId" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "baseVolume" in value;
    isInstance = isInstance && "quoteVolume" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "timestamp" in value;

    return isInstance;
}

export function ApiV2MarketTradesGet200ResponseTradesInnerFromJSON(json: any): ApiV2MarketTradesGet200ResponseTradesInner {
    return ApiV2MarketTradesGet200ResponseTradesInnerFromJSONTyped(json, false);
}

export function ApiV2MarketTradesGet200ResponseTradesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketTradesGet200ResponseTradesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tradeId': json['trade_id'],
        'price': json['price'],
        'baseVolume': json['base_volume'],
        'quoteVolume': json['quote_volume'],
        'type': json['type'],
        'timestamp': json['timestamp'],
    };
}

export function ApiV2MarketTradesGet200ResponseTradesInnerToJSON(value?: ApiV2MarketTradesGet200ResponseTradesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'trade_id': value.tradeId,
        'price': value.price,
        'base_volume': value.baseVolume,
        'quote_volume': value.quoteVolume,
        'type': value.type,
        'timestamp': value.timestamp,
    };
}

