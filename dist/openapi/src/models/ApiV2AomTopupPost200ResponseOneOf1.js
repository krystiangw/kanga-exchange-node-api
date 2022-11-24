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
export const ApiV2AomTopupPost200ResponseOneOf1ResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
export const ApiV2AomTopupPost200ResponseOneOf1CodeEnum = {
    NUMBER_9000: 9000
};
/**
 * Check if a given object implements the ApiV2AomTopupPost200ResponseOneOf1 interface.
 */
export function instanceOfApiV2AomTopupPost200ResponseOneOf1(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
export function ApiV2AomTopupPost200ResponseOneOf1FromJSON(json) {
    return ApiV2AomTopupPost200ResponseOneOf1FromJSONTyped(json, false);
}
export function ApiV2AomTopupPost200ResponseOneOf1FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
export function ApiV2AomTopupPost200ResponseOneOf1ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'code': value.code,
    };
}
//# sourceMappingURL=ApiV2AomTopupPost200ResponseOneOf1.js.map