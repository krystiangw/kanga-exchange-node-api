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
exports.ApiV2KposRefillPost200ResponseOneOfToJSON = exports.ApiV2KposRefillPost200ResponseOneOfFromJSONTyped = exports.ApiV2KposRefillPost200ResponseOneOfFromJSON = exports.instanceOfApiV2KposRefillPost200ResponseOneOf = exports.ApiV2KposRefillPost200ResponseOneOfCodeEnum = exports.ApiV2KposRefillPost200ResponseOneOfResultEnum = void 0;
/**
 * @export
 */
exports.ApiV2KposRefillPost200ResponseOneOfResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
exports.ApiV2KposRefillPost200ResponseOneOfCodeEnum = {
    NUMBER_9000: 9000
};
/**
 * Check if a given object implements the ApiV2KposRefillPost200ResponseOneOf interface.
 */
function instanceOfApiV2KposRefillPost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
exports.instanceOfApiV2KposRefillPost200ResponseOneOf = instanceOfApiV2KposRefillPost200ResponseOneOf;
function ApiV2KposRefillPost200ResponseOneOfFromJSON(json) {
    return ApiV2KposRefillPost200ResponseOneOfFromJSONTyped(json, false);
}
exports.ApiV2KposRefillPost200ResponseOneOfFromJSON = ApiV2KposRefillPost200ResponseOneOfFromJSON;
function ApiV2KposRefillPost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
exports.ApiV2KposRefillPost200ResponseOneOfFromJSONTyped = ApiV2KposRefillPost200ResponseOneOfFromJSONTyped;
function ApiV2KposRefillPost200ResponseOneOfToJSON(value) {
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
exports.ApiV2KposRefillPost200ResponseOneOfToJSON = ApiV2KposRefillPost200ResponseOneOfToJSON;
//# sourceMappingURL=ApiV2KposRefillPost200ResponseOneOf.js.map