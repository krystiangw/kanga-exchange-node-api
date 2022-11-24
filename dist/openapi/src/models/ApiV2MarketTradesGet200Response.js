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
import { ApiV2MarketTradesGet200ResponseTradesInnerFromJSON, ApiV2MarketTradesGet200ResponseTradesInnerToJSON, } from './ApiV2MarketTradesGet200ResponseTradesInner';
/**
 * Check if a given object implements the ApiV2MarketTradesGet200Response interface.
 */
export function instanceOfApiV2MarketTradesGet200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "trades" in value;
    return isInstance;
}
export function ApiV2MarketTradesGet200ResponseFromJSON(json) {
    return ApiV2MarketTradesGet200ResponseFromJSONTyped(json, false);
}
export function ApiV2MarketTradesGet200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'timestamp': json['timestamp'],
        'trades': (json['trades'].map(ApiV2MarketTradesGet200ResponseTradesInnerFromJSON)),
    };
}
export function ApiV2MarketTradesGet200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'timestamp': value.timestamp,
        'trades': (value.trades.map(ApiV2MarketTradesGet200ResponseTradesInnerToJSON)),
    };
}
//# sourceMappingURL=ApiV2MarketTradesGet200Response.js.map