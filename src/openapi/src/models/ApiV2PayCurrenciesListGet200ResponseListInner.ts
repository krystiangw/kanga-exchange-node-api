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
 * @interface ApiV2PayCurrenciesListGet200ResponseListInner
 */
export interface ApiV2PayCurrenciesListGet200ResponseListInner {
    /**
     * 
     * @type {string}
     * @memberof ApiV2PayCurrenciesListGet200ResponseListInner
     */
    currency: string;
    /**
     * 
     * @type {object}
     * @memberof ApiV2PayCurrenciesListGet200ResponseListInner
     */
    connectedCurrencies: object;
}

/**
 * Check if a given object implements the ApiV2PayCurrenciesListGet200ResponseListInner interface.
 */
export function instanceOfApiV2PayCurrenciesListGet200ResponseListInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "connectedCurrencies" in value;

    return isInstance;
}

export function ApiV2PayCurrenciesListGet200ResponseListInnerFromJSON(json: any): ApiV2PayCurrenciesListGet200ResponseListInner {
    return ApiV2PayCurrenciesListGet200ResponseListInnerFromJSONTyped(json, false);
}

export function ApiV2PayCurrenciesListGet200ResponseListInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayCurrenciesListGet200ResponseListInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': json['currency'],
        'connectedCurrencies': json['connectedCurrencies'],
    };
}

export function ApiV2PayCurrenciesListGet200ResponseListInnerToJSON(value?: ApiV2PayCurrenciesListGet200ResponseListInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency': value.currency,
        'connectedCurrencies': value.connectedCurrencies,
    };
}

