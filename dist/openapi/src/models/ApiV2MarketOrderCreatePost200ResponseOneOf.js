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
 * @export
 */
export const ApiV2MarketOrderCreatePost200ResponseOneOfResultEnum = {
    Ok: 'ok'
};
/**
 * Check if a given object implements the ApiV2MarketOrderCreatePost200ResponseOneOf interface.
 */
export function instanceOfApiV2MarketOrderCreatePost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "orderId" in value;
    return isInstance;
}
export function ApiV2MarketOrderCreatePost200ResponseOneOfFromJSON(json) {
    return ApiV2MarketOrderCreatePost200ResponseOneOfFromJSONTyped(json, false);
}
export function ApiV2MarketOrderCreatePost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'orderId': json['orderId'],
    };
}
export function ApiV2MarketOrderCreatePost200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'orderId': value.orderId,
    };
}
//# sourceMappingURL=ApiV2MarketOrderCreatePost200ResponseOneOf.js.map