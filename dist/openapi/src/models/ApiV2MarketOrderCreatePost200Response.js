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
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf, ApiV2MarketOrderCreatePost200ResponseOneOfFromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOfToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf';
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf1, ApiV2MarketOrderCreatePost200ResponseOneOf1FromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOf1ToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf1';
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf2, ApiV2MarketOrderCreatePost200ResponseOneOf2FromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOf2ToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf2';
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf3, ApiV2MarketOrderCreatePost200ResponseOneOf3FromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOf3ToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf3';
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf4, ApiV2MarketOrderCreatePost200ResponseOneOf4FromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOf4ToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf4';
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf5, ApiV2MarketOrderCreatePost200ResponseOneOf5FromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOf5ToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf5';
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf6, ApiV2MarketOrderCreatePost200ResponseOneOf6FromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOf6ToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf6';
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf7, ApiV2MarketOrderCreatePost200ResponseOneOf7FromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOf7ToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf7';
import { instanceOfApiV2MarketOrderCreatePost200ResponseOneOf8, ApiV2MarketOrderCreatePost200ResponseOneOf8FromJSONTyped, ApiV2MarketOrderCreatePost200ResponseOneOf8ToJSON, } from './ApiV2MarketOrderCreatePost200ResponseOneOf8';
import { instanceOfApiV2PayPaymentGetPost200ResponseOneOf1, ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped, ApiV2PayPaymentGetPost200ResponseOneOf1ToJSON, } from './ApiV2PayPaymentGetPost200ResponseOneOf1';
import { instanceOfApiV2PayPaymentGetPost200ResponseOneOf2, ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped, ApiV2PayPaymentGetPost200ResponseOneOf2ToJSON, } from './ApiV2PayPaymentGetPost200ResponseOneOf2';
import { instanceOfApiV2PayPaymentGetPost200ResponseOneOf3, ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped, ApiV2PayPaymentGetPost200ResponseOneOf3ToJSON, } from './ApiV2PayPaymentGetPost200ResponseOneOf3';
export function ApiV2MarketOrderCreatePost200ResponseFromJSON(json) {
    return ApiV2MarketOrderCreatePost200ResponseFromJSONTyped(json, false);
}
export function ApiV2MarketOrderCreatePost200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2MarketOrderCreatePost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf3FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf4FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf5FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf6FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf7FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf8FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped(json, true) };
}
export function ApiV2MarketOrderCreatePost200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOfToJSON(value);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf1(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf1ToJSON(value);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf2(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf2ToJSON(value);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf3(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf3ToJSON(value);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf4(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf4ToJSON(value);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf5(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf5ToJSON(value);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf6(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf6ToJSON(value);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf7(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf7ToJSON(value);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf8(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf8ToJSON(value);
    }
    if (instanceOfApiV2PayPaymentGetPost200ResponseOneOf1(value)) {
        return ApiV2PayPaymentGetPost200ResponseOneOf1ToJSON(value);
    }
    if (instanceOfApiV2PayPaymentGetPost200ResponseOneOf2(value)) {
        return ApiV2PayPaymentGetPost200ResponseOneOf2ToJSON(value);
    }
    if (instanceOfApiV2PayPaymentGetPost200ResponseOneOf3(value)) {
        return ApiV2PayPaymentGetPost200ResponseOneOf3ToJSON(value);
    }
    return {};
}
//# sourceMappingURL=ApiV2MarketOrderCreatePost200Response.js.map