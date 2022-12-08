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
exports.ApiV2MarketOrderGetPostRequestToJSON = exports.ApiV2MarketOrderGetPostRequestFromJSONTyped = exports.ApiV2MarketOrderGetPostRequestFromJSON = exports.instanceOfApiV2MarketOrderGetPostRequest = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ApiV2MarketOrderGetPostRequest interface.
 */
function instanceOfApiV2MarketOrderGetPostRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "orderId" in value;
    return isInstance;
}
exports.instanceOfApiV2MarketOrderGetPostRequest = instanceOfApiV2MarketOrderGetPostRequest;
function ApiV2MarketOrderGetPostRequestFromJSON(json) {
    return ApiV2MarketOrderGetPostRequestFromJSONTyped(json, false);
}
exports.ApiV2MarketOrderGetPostRequestFromJSON = ApiV2MarketOrderGetPostRequestFromJSON;
function ApiV2MarketOrderGetPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nonce': json['nonce'],
        'appId': json['appId'],
        'orderId': json['orderId'],
        'walletKey': !(0, runtime_1.exists)(json, 'walletKey') ? undefined : json['walletKey'],
    };
}
exports.ApiV2MarketOrderGetPostRequestFromJSONTyped = ApiV2MarketOrderGetPostRequestFromJSONTyped;
function ApiV2MarketOrderGetPostRequestToJSON(value) {
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
        'walletKey': value.walletKey,
    };
}
exports.ApiV2MarketOrderGetPostRequestToJSON = ApiV2MarketOrderGetPostRequestToJSON;
//# sourceMappingURL=ApiV2MarketOrderGetPostRequest.js.map