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
/**
 * Check if a given object implements the ApiV2MarketOrderBookPost200ResponseOneOfBidsInner interface.
 */
export function instanceOfApiV2MarketOrderBookPost200ResponseOneOfBidsInner(value) {
    let isInstance = true;
    isInstance = isInstance && "remaining" in value;
    isInstance = isInstance && "price" in value;
    return isInstance;
}
export function ApiV2MarketOrderBookPost200ResponseOneOfBidsInnerFromJSON(json) {
    return ApiV2MarketOrderBookPost200ResponseOneOfBidsInnerFromJSONTyped(json, false);
}
export function ApiV2MarketOrderBookPost200ResponseOneOfBidsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'remaining': json['remaining'],
        'price': json['price'],
    };
}
export function ApiV2MarketOrderBookPost200ResponseOneOfBidsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'remaining': value.remaining,
        'price': value.price,
    };
}
//# sourceMappingURL=ApiV2MarketOrderBookPost200ResponseOneOfBidsInner.js.map