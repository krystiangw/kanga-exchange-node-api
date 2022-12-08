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
exports.ApiV2LabelListPost200ResponseToJSON = exports.ApiV2LabelListPost200ResponseFromJSONTyped = exports.ApiV2LabelListPost200ResponseFromJSON = void 0;
const ApiV2LabelListPost200ResponseOneOf_1 = require("./ApiV2LabelListPost200ResponseOneOf");
const ApiV2PayPaymentGetPost200ResponseOneOf1_1 = require("./ApiV2PayPaymentGetPost200ResponseOneOf1");
const ApiV2PayPaymentGetPost200ResponseOneOf2_1 = require("./ApiV2PayPaymentGetPost200ResponseOneOf2");
const ApiV2PayPaymentGetPost200ResponseOneOf3_1 = require("./ApiV2PayPaymentGetPost200ResponseOneOf3");
function ApiV2LabelListPost200ResponseFromJSON(json) {
    return ApiV2LabelListPost200ResponseFromJSONTyped(json, false);
}
exports.ApiV2LabelListPost200ResponseFromJSON = ApiV2LabelListPost200ResponseFromJSON;
function ApiV2LabelListPost200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...(0, ApiV2LabelListPost200ResponseOneOf_1.ApiV2LabelListPost200ResponseOneOfFromJSONTyped)(json, true), ...(0, ApiV2PayPaymentGetPost200ResponseOneOf1_1.ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped)(json, true), ...(0, ApiV2PayPaymentGetPost200ResponseOneOf2_1.ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped)(json, true), ...(0, ApiV2PayPaymentGetPost200ResponseOneOf3_1.ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped)(json, true) };
}
exports.ApiV2LabelListPost200ResponseFromJSONTyped = ApiV2LabelListPost200ResponseFromJSONTyped;
function ApiV2LabelListPost200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, ApiV2LabelListPost200ResponseOneOf_1.instanceOfApiV2LabelListPost200ResponseOneOf)(value)) {
        return (0, ApiV2LabelListPost200ResponseOneOf_1.ApiV2LabelListPost200ResponseOneOfToJSON)(value);
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
exports.ApiV2LabelListPost200ResponseToJSON = ApiV2LabelListPost200ResponseToJSON;
//# sourceMappingURL=ApiV2LabelListPost200Response.js.map