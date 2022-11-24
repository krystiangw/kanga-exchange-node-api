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
export const ApiV2WalletListPost200ResponseOneOf2ResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
export const ApiV2WalletListPost200ResponseOneOf2CodeEnum = {
    NUMBER_9001: 9001
};
/**
 * Check if a given object implements the ApiV2WalletListPost200ResponseOneOf2 interface.
 */
export function instanceOfApiV2WalletListPost200ResponseOneOf2(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
export function ApiV2WalletListPost200ResponseOneOf2FromJSON(json) {
    return ApiV2WalletListPost200ResponseOneOf2FromJSONTyped(json, false);
}
export function ApiV2WalletListPost200ResponseOneOf2FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
export function ApiV2WalletListPost200ResponseOneOf2ToJSON(value) {
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
//# sourceMappingURL=ApiV2WalletListPost200ResponseOneOf2.js.map