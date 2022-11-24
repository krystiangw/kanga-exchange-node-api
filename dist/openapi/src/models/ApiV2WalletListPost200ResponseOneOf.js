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
import { ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSON, ApiV2WalletListPost200ResponseOneOfWalletsInnerToJSON, } from './ApiV2WalletListPost200ResponseOneOfWalletsInner';
/**
 * @export
 */
export const ApiV2WalletListPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
};
/**
 * Check if a given object implements the ApiV2WalletListPost200ResponseOneOf interface.
 */
export function instanceOfApiV2WalletListPost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "wallets" in value;
    return isInstance;
}
export function ApiV2WalletListPost200ResponseOneOfFromJSON(json) {
    return ApiV2WalletListPost200ResponseOneOfFromJSONTyped(json, false);
}
export function ApiV2WalletListPost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'wallets': (json['wallets'].map(ApiV2WalletListPost200ResponseOneOfWalletsInnerFromJSON)),
    };
}
export function ApiV2WalletListPost200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'wallets': (value.wallets.map(ApiV2WalletListPost200ResponseOneOfWalletsInnerToJSON)),
    };
}
//# sourceMappingURL=ApiV2WalletListPost200ResponseOneOf.js.map