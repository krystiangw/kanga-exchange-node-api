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
import { instanceOfApiV2AomStartPost200ResponseOneOf, ApiV2AomStartPost200ResponseOneOfFromJSONTyped, ApiV2AomStartPost200ResponseOneOfToJSON, } from './ApiV2AomStartPost200ResponseOneOf';
import { instanceOfApiV2AomStartPost200ResponseOneOf1, ApiV2AomStartPost200ResponseOneOf1FromJSONTyped, ApiV2AomStartPost200ResponseOneOf1ToJSON, } from './ApiV2AomStartPost200ResponseOneOf1';
import { instanceOfApiV2PayPaymentGetPost200ResponseOneOf1, ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped, ApiV2PayPaymentGetPost200ResponseOneOf1ToJSON, } from './ApiV2PayPaymentGetPost200ResponseOneOf1';
import { instanceOfApiV2PayPaymentGetPost200ResponseOneOf2, ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped, ApiV2PayPaymentGetPost200ResponseOneOf2ToJSON, } from './ApiV2PayPaymentGetPost200ResponseOneOf2';
import { instanceOfApiV2PayPaymentGetPost200ResponseOneOf3, ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped, ApiV2PayPaymentGetPost200ResponseOneOf3ToJSON, } from './ApiV2PayPaymentGetPost200ResponseOneOf3';
export function ApiV2AomStartPost200ResponseFromJSON(json) {
    return ApiV2AomStartPost200ResponseFromJSONTyped(json, false);
}
export function ApiV2AomStartPost200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2AomStartPost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2AomStartPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped(json, true) };
}
export function ApiV2AomStartPost200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if (instanceOfApiV2AomStartPost200ResponseOneOf(value)) {
        return ApiV2AomStartPost200ResponseOneOfToJSON(value);
    }
    if (instanceOfApiV2AomStartPost200ResponseOneOf1(value)) {
        return ApiV2AomStartPost200ResponseOneOf1ToJSON(value);
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
//# sourceMappingURL=ApiV2AomStartPost200Response.js.map