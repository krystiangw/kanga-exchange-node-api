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
exports.ApiV2LabelUserListPostRequestToJSON = exports.ApiV2LabelUserListPostRequestFromJSONTyped = exports.ApiV2LabelUserListPostRequestFromJSON = exports.instanceOfApiV2LabelUserListPostRequest = void 0;
/**
 * Check if a given object implements the ApiV2LabelUserListPostRequest interface.
 */
function instanceOfApiV2LabelUserListPostRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "appUserId" in value;
    return isInstance;
}
exports.instanceOfApiV2LabelUserListPostRequest = instanceOfApiV2LabelUserListPostRequest;
function ApiV2LabelUserListPostRequestFromJSON(json) {
    return ApiV2LabelUserListPostRequestFromJSONTyped(json, false);
}
exports.ApiV2LabelUserListPostRequestFromJSON = ApiV2LabelUserListPostRequestFromJSON;
function ApiV2LabelUserListPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nonce': json['nonce'],
        'appId': json['appId'],
        'appUserId': json['appUserId'],
    };
}
exports.ApiV2LabelUserListPostRequestFromJSONTyped = ApiV2LabelUserListPostRequestFromJSONTyped;
function ApiV2LabelUserListPostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nonce': value.nonce,
        'appId': value.appId,
        'appUserId': value.appUserId,
    };
}
exports.ApiV2LabelUserListPostRequestToJSON = ApiV2LabelUserListPostRequestToJSON;
//# sourceMappingURL=ApiV2LabelUserListPostRequest.js.map