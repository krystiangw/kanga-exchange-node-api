"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiV2KposRefillPost200ResponseToJSON = exports.ApiV2KposRefillPost200ResponseFromJSONTyped = exports.ApiV2KposRefillPost200ResponseFromJSON = void 0;
const ApiV2KposBalancesGetPost200ResponseOneOf_1 = require("./ApiV2KposBalancesGetPost200ResponseOneOf");
const ApiV2KposRefillPost200ResponseOneOf_1 = require("./ApiV2KposRefillPost200ResponseOneOf");
const ApiV2KposRefillPost200ResponseOneOf1_1 = require("./ApiV2KposRefillPost200ResponseOneOf1");
const ApiV2KposRefillPost200ResponseOneOf2_1 = require("./ApiV2KposRefillPost200ResponseOneOf2");
const ApiV2KposRefillPost200ResponseOneOf3_1 = require("./ApiV2KposRefillPost200ResponseOneOf3");
const ApiV2PayPaymentGetPost200ResponseOneOf1_1 = require("./ApiV2PayPaymentGetPost200ResponseOneOf1");
const ApiV2PayPaymentGetPost200ResponseOneOf2_1 = require("./ApiV2PayPaymentGetPost200ResponseOneOf2");
const ApiV2PayPaymentGetPost200ResponseOneOf3_1 = require("./ApiV2PayPaymentGetPost200ResponseOneOf3");
function ApiV2KposRefillPost200ResponseFromJSON(json) {
    return ApiV2KposRefillPost200ResponseFromJSONTyped(json, false);
}
exports.ApiV2KposRefillPost200ResponseFromJSON = ApiV2KposRefillPost200ResponseFromJSON;
function ApiV2KposRefillPost200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...(0, ApiV2KposBalancesGetPost200ResponseOneOf_1.ApiV2KposBalancesGetPost200ResponseOneOfFromJSONTyped)(json, true), ...(0, ApiV2KposRefillPost200ResponseOneOf_1.ApiV2KposRefillPost200ResponseOneOfFromJSONTyped)(json, true), ...(0, ApiV2KposRefillPost200ResponseOneOf1_1.ApiV2KposRefillPost200ResponseOneOf1FromJSONTyped)(json, true), ...(0, ApiV2KposRefillPost200ResponseOneOf2_1.ApiV2KposRefillPost200ResponseOneOf2FromJSONTyped)(json, true), ...(0, ApiV2KposRefillPost200ResponseOneOf3_1.ApiV2KposRefillPost200ResponseOneOf3FromJSONTyped)(json, true), ...(0, ApiV2PayPaymentGetPost200ResponseOneOf1_1.ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped)(json, true), ...(0, ApiV2PayPaymentGetPost200ResponseOneOf2_1.ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped)(json, true), ...(0, ApiV2PayPaymentGetPost200ResponseOneOf3_1.ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped)(json, true) };
}
exports.ApiV2KposRefillPost200ResponseFromJSONTyped = ApiV2KposRefillPost200ResponseFromJSONTyped;
function ApiV2KposRefillPost200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, ApiV2KposBalancesGetPost200ResponseOneOf_1.instanceOfApiV2KposBalancesGetPost200ResponseOneOf)(value)) {
        return (0, ApiV2KposBalancesGetPost200ResponseOneOf_1.ApiV2KposBalancesGetPost200ResponseOneOfToJSON)(value);
    }
    if ((0, ApiV2KposRefillPost200ResponseOneOf_1.instanceOfApiV2KposRefillPost200ResponseOneOf)(value)) {
        return (0, ApiV2KposRefillPost200ResponseOneOf_1.ApiV2KposRefillPost200ResponseOneOfToJSON)(value);
    }
    if ((0, ApiV2KposRefillPost200ResponseOneOf1_1.instanceOfApiV2KposRefillPost200ResponseOneOf1)(value)) {
        return (0, ApiV2KposRefillPost200ResponseOneOf1_1.ApiV2KposRefillPost200ResponseOneOf1ToJSON)(value);
    }
    if ((0, ApiV2KposRefillPost200ResponseOneOf2_1.instanceOfApiV2KposRefillPost200ResponseOneOf2)(value)) {
        return (0, ApiV2KposRefillPost200ResponseOneOf2_1.ApiV2KposRefillPost200ResponseOneOf2ToJSON)(value);
    }
    if ((0, ApiV2KposRefillPost200ResponseOneOf3_1.instanceOfApiV2KposRefillPost200ResponseOneOf3)(value)) {
        return (0, ApiV2KposRefillPost200ResponseOneOf3_1.ApiV2KposRefillPost200ResponseOneOf3ToJSON)(value);
    }
    if ((0, ApiV2PayPaymentGetPost200ResponseOneOf1_1.instanceOfApiV2PayPaymentGetPost200ResponseOneOf1)(value)) {
        return (0, ApiV2PayPaymentGetPost200ResponseOneOf1_1.ApiV2PayPaymentGetPost200ResponseOneOf1ToJSON)(value);
    }
    if ((0, ApiV2PayPaymentGetPost200ResponseOneOf2_1.instanceOfApiV2PayPaymentGetPost200ResponseOneOf2)(value)) {
        return (0, ApiV2PayPaymentGetPost200ResponseOneOf2_1.ApiV2PayPaymentGetPost200ResponseOneOf2ToJSON)(value);
    }
    if ((0, ApiV2PayPaymentGetPost200ResponseOneOf3_1.instanceOfApiV2PayPaymentGetPost200ResponseOneOf3)(value)) {
        return (0, ApiV2PayPaymentGetPost200ResponseOneOf3_1.ApiV2PayPaymentGetPost200ResponseOneOf3ToJSON)(value);
    }
    return {};
}
exports.ApiV2KposRefillPost200ResponseToJSON = ApiV2KposRefillPost200ResponseToJSON;
//# sourceMappingURL=ApiV2KposRefillPost200Response.js.map