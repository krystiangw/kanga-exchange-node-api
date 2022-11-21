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
    ApiV2WalletListPost200ResponseOneOf,
    instanceOfApiV2WalletListPost200ResponseOneOf,
    ApiV2WalletListPost200ResponseOneOfFromJSON,
    ApiV2WalletListPost200ResponseOneOfFromJSONTyped,
    ApiV2WalletListPost200ResponseOneOfToJSON,
} from './ApiV2WalletListPost200ResponseOneOf';
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
import {
    ApiV2WalletListPost200ResponseOneOf3,
    instanceOfApiV2WalletListPost200ResponseOneOf3,
    ApiV2WalletListPost200ResponseOneOf3FromJSON,
    ApiV2WalletListPost200ResponseOneOf3FromJSONTyped,
    ApiV2WalletListPost200ResponseOneOf3ToJSON,
} from './ApiV2WalletListPost200ResponseOneOf3';

/**
 * @type ApiV2WalletListPost200Response
 * 
 * @export
 */
export type ApiV2WalletListPost200Response = ApiV2WalletListPost200ResponseOneOf | ApiV2WalletListPost200ResponseOneOf1 | ApiV2WalletListPost200ResponseOneOf2 | ApiV2WalletListPost200ResponseOneOf3;

export function ApiV2WalletListPost200ResponseFromJSON(json: any): ApiV2WalletListPost200Response {
    return ApiV2WalletListPost200ResponseFromJSONTyped(json, false);
}

export function ApiV2WalletListPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2WalletListPost200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2WalletListPost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2WalletListPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2WalletListPost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2WalletListPost200ResponseOneOf3FromJSONTyped(json, true) };
}

export function ApiV2WalletListPost200ResponseToJSON(value?: ApiV2WalletListPost200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApiV2WalletListPost200ResponseOneOf(value)) {
        return ApiV2WalletListPost200ResponseOneOfToJSON(value as ApiV2WalletListPost200ResponseOneOf);
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf1(value)) {
        return ApiV2WalletListPost200ResponseOneOf1ToJSON(value as ApiV2WalletListPost200ResponseOneOf1);
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf2(value)) {
        return ApiV2WalletListPost200ResponseOneOf2ToJSON(value as ApiV2WalletListPost200ResponseOneOf2);
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf3(value)) {
        return ApiV2WalletListPost200ResponseOneOf3ToJSON(value as ApiV2WalletListPost200ResponseOneOf3);
    }

    return {};
}
