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
exports.ApiV2WalletListPost200ResponseOneOfWalletsInnerToJSON = exports.ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSONTyped = exports.ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSON = exports.instanceOfApiV2WalletListPost200ResponseOneOfWalletsInner = void 0;
const ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner_1 = require("./ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner");
/**
 * Check if a given object implements the ApiV2WalletListPost200ResponseOneOfWalletsInner interface.
 */
function instanceOfApiV2WalletListPost200ResponseOneOfWalletsInner(value) {
    let isInstance = true;
    isInstance = isInstance && "currencyCode" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "lockedValue" in value;
    isInstance = isInstance && "addresses" in value;
    return isInstance;
}
exports.instanceOfApiV2WalletListPost200ResponseOneOfWalletsInner = instanceOfApiV2WalletListPost200ResponseOneOfWalletsInner;
function ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSON(json) {
    return ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSONTyped(json, false);
}
exports.ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSON = ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSON;
function ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currencyCode': json['currencyCode'],
        'value': json['value'],
        'lockedValue': json['lockedValue'],
        'addresses': (json['addresses'].map(ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner_1.ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInnerFromJSON)),
    };
}
exports.ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSONTyped = ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSONTyped;
function ApiV2WalletListPost200ResponseOneOfWalletsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currencyCode': value.currencyCode,
        'value': value.value,
        'lockedValue': value.lockedValue,
        'addresses': (value.addresses.map(ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInner_1.ApiV2WalletListPost200ResponseOneOfWalletsInnerAddressesInnerToJSON)),
    };
}
exports.ApiV2WalletListPost200ResponseOneOfWalletsInnerToJSON = ApiV2WalletListPost200ResponseOneOfWalletsInnerToJSON;
//# sourceMappingURL=ApiV2WalletListPost200ResponseOneOfWalletsInner.js.map