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
export const ApiV2AomClosePost200ResponseOneOfResultEnum = {
    Ok: 'ok'
};
/**
 * Check if a given object implements the ApiV2AomClosePost200ResponseOneOf interface.
 */
export function instanceOfApiV2AomClosePost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "transferred" in value;
    return isInstance;
}
export function ApiV2AomClosePost200ResponseOneOfFromJSON(json) {
    return ApiV2AomClosePost200ResponseOneOfFromJSONTyped(json, false);
}
export function ApiV2AomClosePost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'transferred': json['transferred'],
    };
}
export function ApiV2AomClosePost200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'transferred': value.transferred,
    };
}
//# sourceMappingURL=ApiV2AomClosePost200ResponseOneOf.js.map