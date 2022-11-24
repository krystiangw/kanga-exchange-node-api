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
import { instanceOfApiV2WalletListPost200ResponseOneOf, ApiV2WalletListPost200ResponseOneOfFromJSONTyped, ApiV2WalletListPost200ResponseOneOfToJSON, } from './ApiV2WalletListPost200ResponseOneOf';
import { instanceOfApiV2WalletListPost200ResponseOneOf1, ApiV2WalletListPost200ResponseOneOf1FromJSONTyped, ApiV2WalletListPost200ResponseOneOf1ToJSON, } from './ApiV2WalletListPost200ResponseOneOf1';
import { instanceOfApiV2WalletListPost200ResponseOneOf2, ApiV2WalletListPost200ResponseOneOf2FromJSONTyped, ApiV2WalletListPost200ResponseOneOf2ToJSON, } from './ApiV2WalletListPost200ResponseOneOf2';
import { instanceOfApiV2WalletListPost200ResponseOneOf3, ApiV2WalletListPost200ResponseOneOf3FromJSONTyped, ApiV2WalletListPost200ResponseOneOf3ToJSON, } from './ApiV2WalletListPost200ResponseOneOf3';
export function ApiV2WalletListPost200ResponseFromJSON(json) {
    return ApiV2WalletListPost200ResponseFromJSONTyped(json, false);
}
export function ApiV2WalletListPost200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2WalletListPost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2WalletListPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2WalletListPost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2WalletListPost200ResponseOneOf3FromJSONTyped(json, true) };
}
export function ApiV2WalletListPost200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf(value)) {
        return ApiV2WalletListPost200ResponseOneOfToJSON(value);
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf1(value)) {
        return ApiV2WalletListPost200ResponseOneOf1ToJSON(value);
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf2(value)) {
        return ApiV2WalletListPost200ResponseOneOf2ToJSON(value);
    }
    if (instanceOfApiV2WalletListPost200ResponseOneOf3(value)) {
        return ApiV2WalletListPost200ResponseOneOf3ToJSON(value);
    }
    return {};
}
//# sourceMappingURL=ApiV2WalletListPost200Response.js.map