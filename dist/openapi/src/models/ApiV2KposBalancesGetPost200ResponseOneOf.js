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
export const ApiV2KposBalancesGetPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
};
/**
 * Check if a given object implements the ApiV2KposBalancesGetPost200ResponseOneOf interface.
 */
export function instanceOfApiV2KposBalancesGetPost200ResponseOneOf(value) {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "kposTotal" in value;
    isInstance = isInstance && "kposPrize" in value;
    isInstance = isInstance && "kposRefill" in value;
    return isInstance;
}
export function ApiV2KposBalancesGetPost200ResponseOneOfFromJSON(json) {
    return ApiV2KposBalancesGetPost200ResponseOneOfFromJSONTyped(json, false);
}
export function ApiV2KposBalancesGetPost200ResponseOneOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'kposTotal': json['kposTotal'],
        'kposPrize': json['kposPrize'],
        'kposRefill': json['kposRefill'],
    };
}
export function ApiV2KposBalancesGetPost200ResponseOneOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'kposTotal': value.kposTotal,
        'kposPrize': value.kposPrize,
        'kposRefill': value.kposRefill,
    };
}
//# sourceMappingURL=ApiV2KposBalancesGetPost200ResponseOneOf.js.map