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
 * @interface ApiV2AomWithdrawPost200ResponseOneOf
 */
export interface ApiV2AomWithdrawPost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2AomWithdrawPost200ResponseOneOf
     */
    result: ApiV2AomWithdrawPost200ResponseOneOfResultEnum;
    /**
     * 
     * @type {object}
     * @memberof ApiV2AomWithdrawPost200ResponseOneOf
     */
    withdrawal: object;
}


/**
 * @export
 */
export const ApiV2AomWithdrawPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
} as const;
export type ApiV2AomWithdrawPost200ResponseOneOfResultEnum = typeof ApiV2AomWithdrawPost200ResponseOneOfResultEnum[keyof typeof ApiV2AomWithdrawPost200ResponseOneOfResultEnum];


/**
 * Check if a given object implements the ApiV2AomWithdrawPost200ResponseOneOf interface.
 */
export function instanceOfApiV2AomWithdrawPost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "withdrawal" in value;

    return isInstance;
}

export function ApiV2AomWithdrawPost200ResponseOneOfFromJSON(json: any): ApiV2AomWithdrawPost200ResponseOneOf {
    return ApiV2AomWithdrawPost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2AomWithdrawPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomWithdrawPost200ResponseOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'withdrawal': json['withdrawal'],
    };
}

export function ApiV2AomWithdrawPost200ResponseOneOfToJSON(value?: ApiV2AomWithdrawPost200ResponseOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'withdrawal': value.withdrawal,
    };
}

