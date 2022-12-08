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
exports.ApiV2PayPaymentGetPost200ResponseOneOf4ToJSON = exports.ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped = exports.ApiV2PayPaymentGetPost200ResponseOneOf4FromJSON = exports.instanceOfApiV2PayPaymentGetPost200ResponseOneOf4 = exports.ApiV2PayPaymentGetPost200ResponseOneOf4CodeEnum = exports.ApiV2PayPaymentGetPost200ResponseOneOf4ResultEnum = void 0;
/**
 * @export
 */
exports.ApiV2PayPaymentGetPost200ResponseOneOf4ResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
exports.ApiV2PayPaymentGetPost200ResponseOneOf4CodeEnum = {
    NUMBER_9000: 9000
};
/**
 * Check if a given object implements the ApiV2PayPaymentGetPost200ResponseOneOf4 interface.
 */
function instanceOfApiV2PayPaymentGetPost200ResponseOneOf4(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
exports.instanceOfApiV2PayPaymentGetPost200ResponseOneOf4 = instanceOfApiV2PayPaymentGetPost200ResponseOneOf4;
function ApiV2PayPaymentGetPost200ResponseOneOf4FromJSON(json) {
    return ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped(json, false);
}
exports.ApiV2PayPaymentGetPost200ResponseOneOf4FromJSON = ApiV2PayPaymentGetPost200ResponseOneOf4FromJSON;
function ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
exports.ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped = ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped;
function ApiV2PayPaymentGetPost200ResponseOneOf4ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'code': value.code,
    };
}
exports.ApiV2PayPaymentGetPost200ResponseOneOf4ToJSON = ApiV2PayPaymentGetPost200ResponseOneOf4ToJSON;
//# sourceMappingURL=ApiV2PayPaymentGetPost200ResponseOneOf4.js.map