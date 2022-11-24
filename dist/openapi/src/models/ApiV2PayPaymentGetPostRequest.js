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
 * Check if a given object implements the ApiV2PayPaymentGetPostRequest interface.
 */
export function instanceOfApiV2PayPaymentGetPostRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
export function ApiV2PayPaymentGetPostRequestFromJSON(json) {
    return ApiV2PayPaymentGetPostRequestFromJSONTyped(json, false);
}
export function ApiV2PayPaymentGetPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nonce': json['nonce'],
        'appId': json['appId'],
        'id': json['id'],
    };
}
export function ApiV2PayPaymentGetPostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nonce': value.nonce,
        'appId': value.appId,
        'id': value.id,
    };
}
//# sourceMappingURL=ApiV2PayPaymentGetPostRequest.js.map