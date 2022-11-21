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
 * @interface ApiUserMarketTransactionsListPost200ResponseListInner
 */
export interface ApiUserMarketTransactionsListPost200ResponseListInner {
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    type: ApiUserMarketTransactionsListPost200ResponseListInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    marketId: ApiUserMarketTransactionsListPost200ResponseListInnerMarketIdEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    payingCurrency: ApiUserMarketTransactionsListPost200ResponseListInnerPayingCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    buyingCurrency: ApiUserMarketTransactionsListPost200ResponseListInnerBuyingCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    price: ApiUserMarketTransactionsListPost200ResponseListInnerPriceEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    quantity: ApiUserMarketTransactionsListPost200ResponseListInnerQuantityEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    value: ApiUserMarketTransactionsListPost200ResponseListInnerValueEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    state: ApiUserMarketTransactionsListPost200ResponseListInnerStateEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    side: ApiUserMarketTransactionsListPost200ResponseListInnerSideEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    matchType: ApiUserMarketTransactionsListPost200ResponseListInnerMatchTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserMarketTransactionsListPost200ResponseListInner
     */
    created: ApiUserMarketTransactionsListPost200ResponseListInnerCreatedEnum;
}


/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerTypeEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerTypeEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerTypeEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerTypeEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerMarketIdEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerMarketIdEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerMarketIdEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerMarketIdEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerPayingCurrencyEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerPayingCurrencyEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerPayingCurrencyEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerPayingCurrencyEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerBuyingCurrencyEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerBuyingCurrencyEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerBuyingCurrencyEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerBuyingCurrencyEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerPriceEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerPriceEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerPriceEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerPriceEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerQuantityEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerQuantityEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerQuantityEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerQuantityEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerValueEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerValueEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerValueEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerValueEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerStateEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerStateEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerStateEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerStateEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerSideEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerSideEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerSideEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerSideEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerMatchTypeEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerMatchTypeEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerMatchTypeEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerMatchTypeEnum];

/**
 * @export
 */
export const ApiUserMarketTransactionsListPost200ResponseListInnerCreatedEnum = {
    Ok: 'ok'
} as const;
export type ApiUserMarketTransactionsListPost200ResponseListInnerCreatedEnum = typeof ApiUserMarketTransactionsListPost200ResponseListInnerCreatedEnum[keyof typeof ApiUserMarketTransactionsListPost200ResponseListInnerCreatedEnum];


/**
 * Check if a given object implements the ApiUserMarketTransactionsListPost200ResponseListInner interface.
 */
export function instanceOfApiUserMarketTransactionsListPost200ResponseListInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "marketId" in value;
    isInstance = isInstance && "payingCurrency" in value;
    isInstance = isInstance && "buyingCurrency" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "quantity" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "side" in value;
    isInstance = isInstance && "matchType" in value;
    isInstance = isInstance && "created" in value;

    return isInstance;
}

export function ApiUserMarketTransactionsListPost200ResponseListInnerFromJSON(json: any): ApiUserMarketTransactionsListPost200ResponseListInner {
    return ApiUserMarketTransactionsListPost200ResponseListInnerFromJSONTyped(json, false);
}

export function ApiUserMarketTransactionsListPost200ResponseListInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiUserMarketTransactionsListPost200ResponseListInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'marketId': json['marketId'],
        'payingCurrency': json['payingCurrency'],
        'buyingCurrency': json['buyingCurrency'],
        'price': json['price'],
        'quantity': json['quantity'],
        'value': json['value'],
        'state': json['state'],
        'side': json['side'],
        'matchType': json['matchType'],
        'created': json['created'],
    };
}

export function ApiUserMarketTransactionsListPost200ResponseListInnerToJSON(value?: ApiUserMarketTransactionsListPost200ResponseListInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'marketId': value.marketId,
        'payingCurrency': value.payingCurrency,
        'buyingCurrency': value.buyingCurrency,
        'price': value.price,
        'quantity': value.quantity,
        'value': value.value,
        'state': value.state,
        'side': value.side,
        'matchType': value.matchType,
        'created': value.created,
    };
}
