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
exports.ApiV2MarketChangesGet200ResponseOneOfToJSON = exports.ApiV2MarketChangesGet200ResponseOneOfFromJSONTyped = exports.ApiV2MarketChangesGet200ResponseOneOfFromJSON = exports.instanceOfApiV2MarketChangesGet200ResponseOneOf = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ApiV2MarketChangesGet200ResponseOneOf interface.
 */
function instanceOfApiV2MarketChangesGet200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "timestamp" in value;
    return isInstance;
}
exports.instanceOfApiV2MarketChangesGet200ResponseOneOf = instanceOfApiV2MarketChangesGet200ResponseOneOf;
function ApiV2MarketChangesGet200ResponseOneOfFromJSON(json) {
    return ApiV2MarketChangesGet200ResponseOneOfFromJSONTyped(json, false);
}
exports.ApiV2MarketChangesGet200ResponseOneOfFromJSON = ApiV2MarketChangesGet200ResponseOneOfFromJSON;
function ApiV2MarketChangesGet200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'timestamp': json['timestamp'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : json['price'],
        'minPrice': !(0, runtime_1.exists)(json, 'minPrice') ? undefined : json['minPrice'],
        'maxPrice': !(0, runtime_1.exists)(json, 'maxPrice') ? undefined : json['maxPrice'],
        'highestBid': !(0, runtime_1.exists)(json, 'highestBid') ? undefined : json['highestBid'],
        'lowestAsk': !(0, runtime_1.exists)(json, 'lowestAsk') ? undefined : json['lowestAsk'],
        'volume': !(0, runtime_1.exists)(json, 'volume') ? undefined : json['volume'],
        'volume24': !(0, runtime_1.exists)(json, 'volume24') ? undefined : json['volume24'],
        'quantityVolume24': !(0, runtime_1.exists)(json, 'quantityVolume24') ? undefined : json['quantityVolume24'],
        'weeklyVolume': !(0, runtime_1.exists)(json, 'weeklyVolume') ? undefined : json['weeklyVolume'],
        'monthlyVolume': !(0, runtime_1.exists)(json, 'monthlyVolume') ? undefined : json['monthlyVolume'],
        'change': !(0, runtime_1.exists)(json, 'change') ? undefined : json['change'],
        'changeQuantity': !(0, runtime_1.exists)(json, 'changeQuantity') ? undefined : json['changeQuantity'],
    };
}
exports.ApiV2MarketChangesGet200ResponseOneOfFromJSONTyped = ApiV2MarketChangesGet200ResponseOneOfFromJSONTyped;
function ApiV2MarketChangesGet200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'timestamp': value.timestamp,
        'price': value.price,
        'minPrice': value.minPrice,
        'maxPrice': value.maxPrice,
        'highestBid': value.highestBid,
        'lowestAsk': value.lowestAsk,
        'volume': value.volume,
        'volume24': value.volume24,
        'quantityVolume24': value.quantityVolume24,
        'weeklyVolume': value.weeklyVolume,
        'monthlyVolume': value.monthlyVolume,
        'change': value.change,
        'changeQuantity': value.changeQuantity,
    };
}
exports.ApiV2MarketChangesGet200ResponseOneOfToJSON = ApiV2MarketChangesGet200ResponseOneOfToJSON;
//# sourceMappingURL=ApiV2MarketChangesGet200ResponseOneOf.js.map