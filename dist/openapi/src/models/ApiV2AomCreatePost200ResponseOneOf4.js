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
export const ApiV2AomCreatePost200ResponseOneOf4ResultEnum = {
    Fail: 'fail'
};
/**
 * @export
 */
export const ApiV2AomCreatePost200ResponseOneOf4CodeEnum = {
    NUMBER_9003: 9003
};
/**
 * Check if a given object implements the ApiV2AomCreatePost200ResponseOneOf4 interface.
 */
export function instanceOfApiV2AomCreatePost200ResponseOneOf4(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
export function ApiV2AomCreatePost200ResponseOneOf4FromJSON(json) {
    return ApiV2AomCreatePost200ResponseOneOf4FromJSONTyped(json, false);
}
export function ApiV2AomCreatePost200ResponseOneOf4FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'code': json['code'],
    };
}
export function ApiV2AomCreatePost200ResponseOneOf4ToJSON(value) {
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
//# sourceMappingURL=ApiV2AomCreatePost200ResponseOneOf4.js.map