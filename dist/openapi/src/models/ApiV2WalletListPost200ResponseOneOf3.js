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
exports.ApiV2WalletListPost200ResponseOneOf3ToJSON = exports.ApiV2WalletListPost200ResponseOneOf3FromJSONTyped = exports.ApiV2WalletListPost200ResponseOneOf3FromJSON = exports.instanceOfApiV2WalletListPost200ResponseOneOf3 = exports.ApiV2WalletListPost200ResponseOneOf3CodeEnum = exports.ApiV2WalletListPost200ResponseOneOf3ResultEnum = void 0;
/**
 * @export
 */
exports.ApiV2WalletListPost200ResponseOneOf3ResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
exports.ApiV2WalletListPost200ResponseOneOf3CodeEnum = {
    NUMBER_9002: 9002
};
/**
 * Check if a given object implements the ApiV2WalletListPost200ResponseOneOf3 interface.
 */
function instanceOfApiV2WalletListPost200ResponseOneOf3(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
exports.instanceOfApiV2WalletListPost200ResponseOneOf3 = instanceOfApiV2WalletListPost200ResponseOneOf3;
function ApiV2WalletListPost200ResponseOneOf3FromJSON(json) {
    return ApiV2WalletListPost200ResponseOneOf3FromJSONTyped(json, false);
}
exports.ApiV2WalletListPost200ResponseOneOf3FromJSON = ApiV2WalletListPost200ResponseOneOf3FromJSON;
function ApiV2WalletListPost200ResponseOneOf3FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
exports.ApiV2WalletListPost200ResponseOneOf3FromJSONTyped = ApiV2WalletListPost200ResponseOneOf3FromJSONTyped;
function ApiV2WalletListPost200ResponseOneOf3ToJSON(value) {
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
exports.ApiV2WalletListPost200ResponseOneOf3ToJSON = ApiV2WalletListPost200ResponseOneOf3ToJSON;
//# sourceMappingURL=ApiV2WalletListPost200ResponseOneOf3.js.map