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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiV2AomTopupPost200ResponseOneOf
 */
export interface ApiV2AomTopupPost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2AomTopupPost200ResponseOneOf
     */
    result: ApiV2AomTopupPost200ResponseOneOfResultEnum;
    /**
     * 
     * @type {object}
     * @memberof ApiV2AomTopupPost200ResponseOneOf
     */
    topup: object;
    /**
     * 
     * @type {object}
     * @memberof ApiV2AomTopupPost200ResponseOneOf
     */
    balances: object;
}


/**
 * @export
 */
export const ApiV2AomTopupPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
} as const;
export type ApiV2AomTopupPost200ResponseOneOfResultEnum = typeof ApiV2AomTopupPost200ResponseOneOfResultEnum[keyof typeof ApiV2AomTopupPost200ResponseOneOfResultEnum];


/**
 * Check if a given object implements the ApiV2AomTopupPost200ResponseOneOf interface.
 */
export function instanceOfApiV2AomTopupPost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "topup" in value;
    isInstance = isInstance && "balances" in value;

    return isInstance;
}

export function ApiV2AomTopupPost200ResponseOneOfFromJSON(json: any): ApiV2AomTopupPost200ResponseOneOf {
    return ApiV2AomTopupPost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2AomTopupPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomTopupPost200ResponseOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'topup': json['topup'],
        'balances': json['balances'],
    };
}

export function ApiV2AomTopupPost200ResponseOneOfToJSON(value?: ApiV2AomTopupPost200ResponseOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'topup': value.topup,
        'balances': value.balances,
    };
}

