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
exports.ApiV2WalletListPostRequestToJSON = exports.ApiV2WalletListPostRequestFromJSONTyped = exports.ApiV2WalletListPostRequestFromJSON = exports.instanceOfApiV2WalletListPostRequest = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ApiV2WalletListPostRequest interface.
 */
function instanceOfApiV2WalletListPostRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    return isInstance;
}
exports.instanceOfApiV2WalletListPostRequest = instanceOfApiV2WalletListPostRequest;
function ApiV2WalletListPostRequestFromJSON(json) {
    return ApiV2WalletListPostRequestFromJSONTyped(json, false);
}
exports.ApiV2WalletListPostRequestFromJSON = ApiV2WalletListPostRequestFromJSON;
function ApiV2WalletListPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nonce': json['nonce'],
        'appId': json['appId'],
        'walletKey': !(0, runtime_1.exists)(json, 'walletKey') ? undefined : json['walletKey'],
    };
}
exports.ApiV2WalletListPostRequestFromJSONTyped = ApiV2WalletListPostRequestFromJSONTyped;
function ApiV2WalletListPostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nonce': value.nonce,
        'appId': value.appId,
        'walletKey': value.walletKey,
    };
}
exports.ApiV2WalletListPostRequestToJSON = ApiV2WalletListPostRequestToJSON;
//# sourceMappingURL=ApiV2WalletListPostRequest.js.map