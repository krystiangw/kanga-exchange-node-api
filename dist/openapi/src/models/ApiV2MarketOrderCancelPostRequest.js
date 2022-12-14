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
exports.ApiV2MarketOrderCancelPostRequestToJSON = exports.ApiV2MarketOrderCancelPostRequestFromJSONTyped = exports.ApiV2MarketOrderCancelPostRequestFromJSON = exports.instanceOfApiV2MarketOrderCancelPostRequest = void 0;
/**
 * Check if a given object implements the ApiV2MarketOrderCancelPostRequest interface.
 */
function instanceOfApiV2MarketOrderCancelPostRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "orderId" in value;
    return isInstance;
}
exports.instanceOfApiV2MarketOrderCancelPostRequest = instanceOfApiV2MarketOrderCancelPostRequest;
function ApiV2MarketOrderCancelPostRequestFromJSON(json) {
    return ApiV2MarketOrderCancelPostRequestFromJSONTyped(json, false);
}
exports.ApiV2MarketOrderCancelPostRequestFromJSON = ApiV2MarketOrderCancelPostRequestFromJSON;
function ApiV2MarketOrderCancelPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nonce': json['nonce'],
        'appId': json['appId'],
        'orderId': json['orderId'],
    };
}
exports.ApiV2MarketOrderCancelPostRequestFromJSONTyped = ApiV2MarketOrderCancelPostRequestFromJSONTyped;
function ApiV2MarketOrderCancelPostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nonce': value.nonce,
        'appId': value.appId,
        'orderId': value.orderId,
    };
}
exports.ApiV2MarketOrderCancelPostRequestToJSON = ApiV2MarketOrderCancelPostRequestToJSON;
//# sourceMappingURL=ApiV2MarketOrderCancelPostRequest.js.map