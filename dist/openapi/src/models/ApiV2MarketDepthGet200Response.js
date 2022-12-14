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
exports.ApiV2MarketDepthGet200ResponseToJSON = exports.ApiV2MarketDepthGet200ResponseFromJSONTyped = exports.ApiV2MarketDepthGet200ResponseFromJSON = exports.instanceOfApiV2MarketDepthGet200Response = void 0;
const ApiV2MarketDepthGet200ResponseBidsInner_1 = require("./ApiV2MarketDepthGet200ResponseBidsInner");
/**
 * Check if a given object implements the ApiV2MarketDepthGet200Response interface.
 */
function instanceOfApiV2MarketDepthGet200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "bids" in value;
    isInstance = isInstance && "asks" in value;
    return isInstance;
}
exports.instanceOfApiV2MarketDepthGet200Response = instanceOfApiV2MarketDepthGet200Response;
function ApiV2MarketDepthGet200ResponseFromJSON(json) {
    return ApiV2MarketDepthGet200ResponseFromJSONTyped(json, false);
}
exports.ApiV2MarketDepthGet200ResponseFromJSON = ApiV2MarketDepthGet200ResponseFromJSON;
function ApiV2MarketDepthGet200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'timestamp': json['timestamp'],
        'bids': (json['bids'].map(ApiV2MarketDepthGet200ResponseBidsInner_1.ApiV2MarketDepthGet200ResponseBidsInnerFromJSON)),
        'asks': (json['asks'].map(ApiV2MarketDepthGet200ResponseBidsInner_1.ApiV2MarketDepthGet200ResponseBidsInnerFromJSON)),
    };
}
exports.ApiV2MarketDepthGet200ResponseFromJSONTyped = ApiV2MarketDepthGet200ResponseFromJSONTyped;
function ApiV2MarketDepthGet200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'timestamp': value.timestamp,
        'bids': (value.bids.map(ApiV2MarketDepthGet200ResponseBidsInner_1.ApiV2MarketDepthGet200ResponseBidsInnerToJSON)),
        'asks': (value.asks.map(ApiV2MarketDepthGet200ResponseBidsInner_1.ApiV2MarketDepthGet200ResponseBidsInnerToJSON)),
    };
}
exports.ApiV2MarketDepthGet200ResponseToJSON = ApiV2MarketDepthGet200ResponseToJSON;
//# sourceMappingURL=ApiV2MarketDepthGet200Response.js.map