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
 * Check if a given object implements the ApiV2AomListPost200ResponseOneOfListInner interface.
 */
export function instanceOfApiV2AomListPost200ResponseOneOfListInner(value) {
    let isInstance = true;
    isInstance = isInstance && "aomId" in value;
    isInstance = isInstance && "marketId" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "minAmount" in value;
    isInstance = isInstance && "maxAmount" in value;
    isInstance = isInstance && "minDelay" in value;
    isInstance = isInstance && "maxDelay" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "created" in value;
    return isInstance;
}
export function ApiV2AomListPost200ResponseOneOfListInnerFromJSON(json) {
    return ApiV2AomListPost200ResponseOneOfListInnerFromJSONTyped(json, false);
}
export function ApiV2AomListPost200ResponseOneOfListInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aomId': json['aomId'],
        'marketId': json['marketId'],
        'currency': json['currency'],
        'minAmount': json['minAmount'],
        'maxAmount': json['maxAmount'],
        'minDelay': json['minDelay'],
        'maxDelay': json['maxDelay'],
        'state': json['state'],
        'created': json['created'],
    };
}
export function ApiV2AomListPost200ResponseOneOfListInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aomId': value.aomId,
        'marketId': value.marketId,
        'currency': value.currency,
        'minAmount': value.minAmount,
        'maxAmount': value.maxAmount,
        'minDelay': value.minDelay,
        'maxDelay': value.maxDelay,
        'state': value.state,
        'created': value.created,
    };
}
//# sourceMappingURL=ApiV2AomListPost200ResponseOneOfListInner.js.map