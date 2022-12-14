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

import {
    ApiV2MarketOrderGetPost200ResponseOneOf,
    instanceOfApiV2MarketOrderGetPost200ResponseOneOf,
    ApiV2MarketOrderGetPost200ResponseOneOfFromJSON,
    ApiV2MarketOrderGetPost200ResponseOneOfFromJSONTyped,
    ApiV2MarketOrderGetPost200ResponseOneOfToJSON,
} from './ApiV2MarketOrderGetPost200ResponseOneOf';
import {
    ApiV2MarketOrderGetPost200ResponseOneOf1,
    instanceOfApiV2MarketOrderGetPost200ResponseOneOf1,
    ApiV2MarketOrderGetPost200ResponseOneOf1FromJSON,
    ApiV2MarketOrderGetPost200ResponseOneOf1FromJSONTyped,
    ApiV2MarketOrderGetPost200ResponseOneOf1ToJSON,
} from './ApiV2MarketOrderGetPost200ResponseOneOf1';
import {
    ApiV2WalletListPost200ResponseOneOf1,
    instanceOfApiV2WalletListPost200ResponseOneOf1,
    ApiV2WalletListPost200ResponseOneOf1FromJSON,
    ApiV2WalletListPost200ResponseOneOf1FromJSONTyped,
    ApiV2WalletListPost200ResponseOneOf1ToJSON,
} from './ApiV2WalletListPost200ResponseOneOf1';
import {
    ApiV2WalletListPost200ResponseOneOf2,
    instanceOfApiV2WalletListPost200ResponseOneOf2,
    ApiV2WalletListPost200ResponseOneOf2FromJSON,
    ApiV2WalletListPost200ResponseOneOf2FromJSONTyped,
    ApiV2WalletListPost200ResponseOneOf2ToJSON,
} from './ApiV2WalletListPost200ResponseOneOf2';

/**
 * @type ApiV2MarketOrderGetPost200Response
 * 
 * @export
 */
export type ApiV2MarketOrderGetPost200Response = ApiV2MarketOrderGetPost200ResponseOneOf | ApiV2MarketOrderGetPost200ResponseOneOf1 | ApiV2WalletListPost200ResponseOneOf1 | ApiV2WalletListPost200ResponseOneOf2;

export function ApiV2MarketOrderGetPost200ResponseFromJSON(json: any): ApiV2MarketOrderGetPost200Response {
    return ApiV2MarketOrderGetPost200ResponseFromJSONTyped(json, false);
}

export function ApiV2MarketOrderGetPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderGetPost200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2MarketOrderGetPost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2MarketOrderGetPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2WalletListPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2WalletListPost200ResponseOneOf2FromJSONTyped(json, true) };
}

export function ApiV2MarketOrderGetPost200ResponseToJSON(value?: ApiV2MarketOrderGetPost200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApiV2MarketOrderGetPost200ResponseOneOf(value)) {
        return ApiV2MarketOrderGetPost200ResponseOneOfToJSON(value as ApiV2MarketOrderGetPost200ResponseOneOf);
    }
    if (instanceOfApiV2MarketOrderGetPost200ResponseOneOf1(value)) {
        return ApiV2MarketOrderGetPost200ResponseOneOf1ToJSON(value as ApiV2MarketOrderGetPost200ResponseOneOf1);
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf1(value)) {
        return ApiV2WalletListPost200ResponseOneOf1ToJSON(value as ApiV2WalletListPost200ResponseOneOf1);
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf2(value)) {
        return ApiV2WalletListPost200ResponseOneOf2ToJSON(value as ApiV2WalletListPost200ResponseOneOf2);
    }

    return {};
}

