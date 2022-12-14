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
exports.ApiV2AomCreatePost200ResponseOneOf6ToJSON = exports.ApiV2AomCreatePost200ResponseOneOf6FromJSONTyped = exports.ApiV2AomCreatePost200ResponseOneOf6FromJSON = exports.instanceOfApiV2AomCreatePost200ResponseOneOf6 = exports.ApiV2AomCreatePost200ResponseOneOf6CodeEnum = exports.ApiV2AomCreatePost200ResponseOneOf6ResultEnum = void 0;
/**
 * @export
 */
exports.ApiV2AomCreatePost200ResponseOneOf6ResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
exports.ApiV2AomCreatePost200ResponseOneOf6CodeEnum = {
    NUMBER_9005: 9005
};
/**
 * Check if a given object implements the ApiV2AomCreatePost200ResponseOneOf6 interface.
 */
function instanceOfApiV2AomCreatePost200ResponseOneOf6(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
exports.instanceOfApiV2AomCreatePost200ResponseOneOf6 = instanceOfApiV2AomCreatePost200ResponseOneOf6;
function ApiV2AomCreatePost200ResponseOneOf6FromJSON(json) {
    return ApiV2AomCreatePost200ResponseOneOf6FromJSONTyped(json, false);
}
exports.ApiV2AomCreatePost200ResponseOneOf6FromJSON = ApiV2AomCreatePost200ResponseOneOf6FromJSON;
function ApiV2AomCreatePost200ResponseOneOf6FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
exports.ApiV2AomCreatePost200ResponseOneOf6FromJSONTyped = ApiV2AomCreatePost200ResponseOneOf6FromJSONTyped;
function ApiV2AomCreatePost200ResponseOneOf6ToJSON(value) {
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
exports.ApiV2AomCreatePost200ResponseOneOf6ToJSON = ApiV2AomCreatePost200ResponseOneOf6ToJSON;
//# sourceMappingURL=ApiV2AomCreatePost200ResponseOneOf6.js.map