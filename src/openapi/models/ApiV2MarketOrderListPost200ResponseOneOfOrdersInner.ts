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
 * @interface ApiV2MarketOrderListPost200ResponseOneOfOrdersInner
 */
export interface ApiV2MarketOrderListPost200ResponseOneOfOrdersInner {
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOfOrdersInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOfOrdersInner
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOfOrdersInner
     */
    quantity: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOfOrdersInner
     */
    remainingQuantity: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOfOrdersInner
     */
    price: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOfOrdersInner
     */
    currentValue: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOfOrdersInner
     */
    created: string;
}

/**
 * Check if a given object implements the ApiV2MarketOrderListPost200ResponseOneOfOrdersInner interface.
 */
export function instanceOfApiV2MarketOrderListPost200ResponseOneOfOrdersInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "quantity" in value;
    isInstance = isInstance && "remainingQuantity" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "currentValue" in value;
    isInstance = isInstance && "created" in value;

    return isInstance;
}

export function ApiV2MarketOrderListPost200ResponseOneOfOrdersInnerFromJSON(json: any): ApiV2MarketOrderListPost200ResponseOneOfOrdersInner {
    return ApiV2MarketOrderListPost200ResponseOneOfOrdersInnerFromJSONTyped(json, false);
}

export function ApiV2MarketOrderListPost200ResponseOneOfOrdersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderListPost200ResponseOneOfOrdersInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'quantity': json['quantity'],
        'remainingQuantity': json['remainingQuantity'],
        'price': json['price'],
        'currentValue': json['currentValue'],
        'created': json['created'],
    };
}

export function ApiV2MarketOrderListPost200ResponseOneOfOrdersInnerToJSON(value?: ApiV2MarketOrderListPost200ResponseOneOfOrdersInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
        'quantity': value.quantity,
        'remainingQuantity': value.remainingQuantity,
        'price': value.price,
        'currentValue': value.currentValue,
        'created': value.created,
    };
}

