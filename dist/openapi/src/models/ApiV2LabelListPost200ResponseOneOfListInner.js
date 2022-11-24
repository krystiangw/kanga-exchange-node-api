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
 * Check if a given object implements the ApiV2LabelListPost200ResponseOneOfListInner interface.
 */
export function instanceOfApiV2LabelListPost200ResponseOneOfListInner(value) {
    let isInstance = true;
    isInstance = isInstance && "labelId" in value;
    isInstance = isInstance && "labelName" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "grantLabelPermission" in value;
    isInstance = isInstance && "readLabelPermission" in value;
    return isInstance;
}
export function ApiV2LabelListPost200ResponseOneOfListInnerFromJSON(json) {
    return ApiV2LabelListPost200ResponseOneOfListInnerFromJSONTyped(json, false);
}
export function ApiV2LabelListPost200ResponseOneOfListInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'labelId': json['labelId'],
        'labelName': json['labelName'],
        'description': json['description'],
        'grantLabelPermission': json['grantLabelPermission'],
        'readLabelPermission': json['readLabelPermission'],
    };
}
export function ApiV2LabelListPost200ResponseOneOfListInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'labelId': value.labelId,
        'labelName': value.labelName,
        'description': value.description,
        'grantLabelPermission': value.grantLabelPermission,
        'readLabelPermission': value.readLabelPermission,
    };
}
//# sourceMappingURL=ApiV2LabelListPost200ResponseOneOfListInner.js.map