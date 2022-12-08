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
exports.ApiV2KposRefillPost200ResponseOneOf1ToJSON = exports.ApiV2KposRefillPost200ResponseOneOf1FromJSONTyped = exports.ApiV2KposRefillPost200ResponseOneOf1FromJSON = exports.instanceOfApiV2KposRefillPost200ResponseOneOf1 = exports.ApiV2KposRefillPost200ResponseOneOf1CodeEnum = exports.ApiV2KposRefillPost200ResponseOneOf1ResultEnum = void 0;
/**
 * @export
 */
exports.ApiV2KposRefillPost200ResponseOneOf1ResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
exports.ApiV2KposRefillPost200ResponseOneOf1CodeEnum = {
    NUMBER_9001: 9001
};
/**
 * Check if a given object implements the ApiV2KposRefillPost200ResponseOneOf1 interface.
 */
function instanceOfApiV2KposRefillPost200ResponseOneOf1(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
exports.instanceOfApiV2KposRefillPost200ResponseOneOf1 = instanceOfApiV2KposRefillPost200ResponseOneOf1;
function ApiV2KposRefillPost200ResponseOneOf1FromJSON(json) {
    return ApiV2KposRefillPost200ResponseOneOf1FromJSONTyped(json, false);
}
exports.ApiV2KposRefillPost200ResponseOneOf1FromJSON = ApiV2KposRefillPost200ResponseOneOf1FromJSON;
function ApiV2KposRefillPost200ResponseOneOf1FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
exports.ApiV2KposRefillPost200ResponseOneOf1FromJSONTyped = ApiV2KposRefillPost200ResponseOneOf1FromJSONTyped;
function ApiV2KposRefillPost200ResponseOneOf1ToJSON(value) {
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
exports.ApiV2KposRefillPost200ResponseOneOf1ToJSON = ApiV2KposRefillPost200ResponseOneOf1ToJSON;
//# sourceMappingURL=ApiV2KposRefillPost200ResponseOneOf1.js.map