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
export const ApiV2LabelUserListPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
};
/**
 * Check if a given object implements the ApiV2LabelUserListPost200ResponseOneOf interface.
 */
export function instanceOfApiV2LabelUserListPost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "labels" in value;
    return isInstance;
}
export function ApiV2LabelUserListPost200ResponseOneOfFromJSON(json) {
    return ApiV2LabelUserListPost200ResponseOneOfFromJSONTyped(json, false);
}
export function ApiV2LabelUserListPost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'labels': json['labels'],
    };
}
export function ApiV2LabelUserListPost200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'labels': value.labels,
    };
}
//# sourceMappingURL=ApiV2LabelUserListPost200ResponseOneOf.js.map