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
import type { ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner } from './ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner';
import {
    ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInnerFromJSON,
    ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInnerFromJSONTyped,
    ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInnerToJSON,
} from './ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner';

/**
 * 
 * @export
 * @interface ApiV2WalletListPost200ResponseOneOfWalletsInner
 */
export interface ApiV2WalletListPost200ResponseOneOfWalletsInner {
    /**
     * 
     * @type {string}
     * @memberof ApiV2WalletListPost200ResponseOneOfWalletsInner
     */
    currencyCode: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2WalletListPost200ResponseOneOfWalletsInner
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2WalletListPost200ResponseOneOfWalletsInner
     */
    lockedValue: string;
    /**
     * 
     * @type {Array<ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner>}
     * @memberof ApiV2WalletListPost200ResponseOneOfWalletsInner
     */
    addresses: Array<ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner>;
}

/**
 * Check if a given object implements the ApiV2WalletListPost200ResponseOneOfWalletsInner interface.
 */
export function instanceOfApiV2WalletListPost200ResponseOneOfWalletsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currencyCode" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "lockedValue" in value;
    isInstance = isInstance && "addresses" in value;

    return isInstance;
}

export function ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSON(json: any): ApiV2WalletListPost200ResponseOneOfWalletsInner {
    return ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSONTyped(json, false);
}

export function ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2WalletListPost200ResponseOneOfWalletsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': json['currencyCode'],
        'value': json['value'],
        'lockedValue': json['lockedValue'],
        'addresses': ((json['addresses'] as Array<any>).map(ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInnerFromJSON)),
    };
}

export function ApiV2WalletListPost200ResponseOneOfWalletsInnerToJSON(value?: ApiV2WalletListPost200ResponseOneOfWalletsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencyCode': value.currencyCode,
        'value': value.value,
        'lockedValue': value.lockedValue,
        'addresses': ((value.addresses as Array<any>).map(ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInnerToJSON)),
    };
}
