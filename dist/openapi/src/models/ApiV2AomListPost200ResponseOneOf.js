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
import { ApiV2AomListPost200ResponseOneOfListInnerFromJSON, ApiV2AomListPost200ResponseOneOfListInnerToJSON, } from './ApiV2AomListPost200ResponseOneOfListInner';
/**
 * @export
 */
export const ApiV2AomListPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
};
/**
 * Check if a given object implements the ApiV2AomListPost200ResponseOneOf interface.
 */
export function instanceOfApiV2AomListPost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "list" in value;
    return isInstance;
}
export function ApiV2AomListPost200ResponseOneOfFromJSON(json) {
    return ApiV2AomListPost200ResponseOneOfFromJSONTyped(json, false);
}
export function ApiV2AomListPost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'list': (json['list'].map(ApiV2AomListPost200ResponseOneOfListInnerFromJSON)),
    };
}
export function ApiV2AomListPost200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'list': (value.list.map(ApiV2AomListPost200ResponseOneOfListInnerToJSON)),
    };
}
//# sourceMappingURL=ApiV2AomListPost200ResponseOneOf.js.map