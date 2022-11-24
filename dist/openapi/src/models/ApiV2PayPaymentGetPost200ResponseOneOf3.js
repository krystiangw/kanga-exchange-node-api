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
export const ApiV2PayPaymentGetPost200ResponseOneOf3ResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
export const ApiV2PayPaymentGetPost200ResponseOneOf3CodeEnum = {
    NUMBER_429: 429
};
/**
 * Check if a given object implements the ApiV2PayPaymentGetPost200ResponseOneOf3 interface.
 */
export function instanceOfApiV2PayPaymentGetPost200ResponseOneOf3(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
export function ApiV2PayPaymentGetPost200ResponseOneOf3FromJSON(json) {
    return ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped(json, false);
}
export function ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
export function ApiV2PayPaymentGetPost200ResponseOneOf3ToJSON(value) {
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
//# sourceMappingURL=ApiV2PayPaymentGetPost200ResponseOneOf3.js.map