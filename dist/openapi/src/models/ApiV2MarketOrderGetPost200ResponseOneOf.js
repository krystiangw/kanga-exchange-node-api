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
export const ApiV2MarketOrderGetPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
};
/**
 * Check if a given object implements the ApiV2MarketOrderGetPost200ResponseOneOf interface.
 */
export function instanceOfApiV2MarketOrderGetPost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "quantity" in value;
    isInstance = isInstance && "remainingQuantity" in value;
    isInstance = isInstance && "currentValue" in value;
    return isInstance;
}
export function ApiV2MarketOrderGetPost200ResponseOneOfFromJSON(json) {
    return ApiV2MarketOrderGetPost200ResponseOneOfFromJSONTyped(json, false);
}
export function ApiV2MarketOrderGetPost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'state': json['state'],
        'type': json['type'],
        'quantity': json['quantity'],
        'remainingQuantity': json['remainingQuantity'],
        'currentValue': json['currentValue'],
    };
}
export function ApiV2MarketOrderGetPost200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'state': value.state,
        'type': value.type,
        'quantity': value.quantity,
        'remainingQuantity': value.remainingQuantity,
        'currentValue': value.currentValue,
    };
}
//# sourceMappingURL=ApiV2MarketOrderGetPost200ResponseOneOf.js.map