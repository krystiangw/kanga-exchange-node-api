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
 * @interface ApiV2MarketOrderGetPost200ResponseOneOf
 */
export interface ApiV2MarketOrderGetPost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderGetPost200ResponseOneOf
     */
    result: ApiV2MarketOrderGetPost200ResponseOneOfResultEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderGetPost200ResponseOneOf
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderGetPost200ResponseOneOf
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderGetPost200ResponseOneOf
     */
    quantity: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderGetPost200ResponseOneOf
     */
    remainingQuantity: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2MarketOrderGetPost200ResponseOneOf
     */
    currentValue: string;
}


/**
 * @export
 */
export const ApiV2MarketOrderGetPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
} as const;
export type ApiV2MarketOrderGetPost200ResponseOneOfResultEnum = typeof ApiV2MarketOrderGetPost200ResponseOneOfResultEnum[keyof typeof ApiV2MarketOrderGetPost200ResponseOneOfResultEnum];


/**
 * Check if a given object implements the ApiV2MarketOrderGetPost200ResponseOneOf interface.
 */
export function instanceOfApiV2MarketOrderGetPost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "quantity" in value;
    isInstance = isInstance && "remainingQuantity" in value;
    isInstance = isInstance && "currentValue" in value;

    return isInstance;
}

export function ApiV2MarketOrderGetPost200ResponseOneOfFromJSON(json: any): ApiV2MarketOrderGetPost200ResponseOneOf {
    return ApiV2MarketOrderGetPost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2MarketOrderGetPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderGetPost200ResponseOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'state': json['state'],
        'type': json['type'],
        'quantity': json['quantity'],
        'remainingQuantity': json['remainingQuantity'],
        'currentValue': json['currentValue'],
    };
}

export function ApiV2MarketOrderGetPost200ResponseOneOfToJSON(value?: ApiV2MarketOrderGetPost200ResponseOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'state': value.state,
        'type': value.type,
        'quantity': value.quantity,
        'remainingQuantity': value.remainingQuantity,
        'currentValue': value.currentValue,
    };
}
