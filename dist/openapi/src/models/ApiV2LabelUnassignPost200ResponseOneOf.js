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
exports.ApiV2LabelUnassignPost200ResponseOneOfToJSON = exports.ApiV2LabelUnassignPost200ResponseOneOfFromJSONTyped = exports.ApiV2LabelUnassignPost200ResponseOneOfFromJSON = exports.instanceOfApiV2LabelUnassignPost200ResponseOneOf = exports.ApiV2LabelUnassignPost200ResponseOneOfCodeEnum = exports.ApiV2LabelUnassignPost200ResponseOneOfResultEnum = void 0;
/**
 * @export
 */
exports.ApiV2LabelUnassignPost200ResponseOneOfResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
exports.ApiV2LabelUnassignPost200ResponseOneOfCodeEnum = {
    NUMBER_9000: 9000
};
/**
 * Check if a given object implements the ApiV2LabelUnassignPost200ResponseOneOf interface.
 */
function instanceOfApiV2LabelUnassignPost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
exports.instanceOfApiV2LabelUnassignPost200ResponseOneOf = instanceOfApiV2LabelUnassignPost200ResponseOneOf;
function ApiV2LabelUnassignPost200ResponseOneOfFromJSON(json) {
    return ApiV2LabelUnassignPost200ResponseOneOfFromJSONTyped(json, false);
}
exports.ApiV2LabelUnassignPost200ResponseOneOfFromJSON = ApiV2LabelUnassignPost200ResponseOneOfFromJSON;
function ApiV2LabelUnassignPost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
exports.ApiV2LabelUnassignPost200ResponseOneOfFromJSONTyped = ApiV2LabelUnassignPost200ResponseOneOfFromJSONTyped;
function ApiV2LabelUnassignPost200ResponseOneOfToJSON(value) {
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
exports.ApiV2LabelUnassignPost200ResponseOneOfToJSON = ApiV2LabelUnassignPost200ResponseOneOfToJSON;
//# sourceMappingURL=ApiV2LabelUnassignPost200ResponseOneOf.js.map