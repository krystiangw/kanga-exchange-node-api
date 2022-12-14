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
exports.ApiV2MarketOrderBookPost200ResponseOneOfToJSON = exports.ApiV2MarketOrderBookPost200ResponseOneOfFromJSONTyped = exports.ApiV2MarketOrderBookPost200ResponseOneOfFromJSON = exports.instanceOfApiV2MarketOrderBookPost200ResponseOneOf = exports.ApiV2MarketOrderBookPost200ResponseOneOfResultEnum = void 0;
const ApiV2MarketOrderBookPost200ResponseOneOfBidsInner_1 = require("./ApiV2MarketOrderBookPost200ResponseOneOfBidsInner");
/**
 * @export
 */
exports.ApiV2MarketOrderBookPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
};
/**
 * Check if a given object implements the ApiV2MarketOrderBookPost200ResponseOneOf interface.
 */
function instanceOfApiV2MarketOrderBookPost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "bids" in value;
    isInstance = isInstance && "asks" in value;
    return isInstance;
}
exports.instanceOfApiV2MarketOrderBookPost200ResponseOneOf = instanceOfApiV2MarketOrderBookPost200ResponseOneOf;
function ApiV2MarketOrderBookPost200ResponseOneOfFromJSON(json) {
    return ApiV2MarketOrderBookPost200ResponseOneOfFromJSONTyped(json, false);
}
exports.ApiV2MarketOrderBookPost200ResponseOneOfFromJSON = ApiV2MarketOrderBookPost200ResponseOneOfFromJSON;
function ApiV2MarketOrderBookPost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'bids': (json['bids'].map(ApiV2MarketOrderBookPost200ResponseOneOfBidsInner_1.ApiV2MarketOrderBookPost200ResponseOneOfBidsInnerFromJSON)),
        'asks': (json['asks'].map(ApiV2MarketOrderBookPost200ResponseOneOfBidsInner_1.ApiV2MarketOrderBookPost200ResponseOneOfBidsInnerFromJSON)),
    };
}
exports.ApiV2MarketOrderBookPost200ResponseOneOfFromJSONTyped = ApiV2MarketOrderBookPost200ResponseOneOfFromJSONTyped;
function ApiV2MarketOrderBookPost200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'bids': (value.bids.map(ApiV2MarketOrderBookPost200ResponseOneOfBidsInner_1.ApiV2MarketOrderBookPost200ResponseOneOfBidsInnerToJSON)),
        'asks': (value.asks.map(ApiV2MarketOrderBookPost200ResponseOneOfBidsInner_1.ApiV2MarketOrderBookPost200ResponseOneOfBidsInnerToJSON)),
    };
}
exports.ApiV2MarketOrderBookPost200ResponseOneOfToJSON = ApiV2MarketOrderBookPost200ResponseOneOfToJSON;
//# sourceMappingURL=ApiV2MarketOrderBookPost200ResponseOneOf.js.map