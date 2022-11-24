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
 * @interface ApiV2KposBalancesGetPost200ResponseOneOf
 */
export interface ApiV2KposBalancesGetPost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2KposBalancesGetPost200ResponseOneOf
     */
    result: ApiV2KposBalancesGetPost200ResponseOneOfResultEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiV2KposBalancesGetPost200ResponseOneOf
     */
    kposTotal: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2KposBalancesGetPost200ResponseOneOf
     */
    kposPrize: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV2KposBalancesGetPost200ResponseOneOf
     */
    kposRefill: string;
}


/**
 * @export
 */
export const ApiV2KposBalancesGetPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
} as const;
export type ApiV2KposBalancesGetPost200ResponseOneOfResultEnum = typeof ApiV2KposBalancesGetPost200ResponseOneOfResultEnum[keyof typeof ApiV2KposBalancesGetPost200ResponseOneOfResultEnum];


/**
 * Check if a given object implements the ApiV2KposBalancesGetPost200ResponseOneOf interface.
 */
export function instanceOfApiV2KposBalancesGetPost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "kposTotal" in value;
    isInstance = isInstance && "kposPrize" in value;
    isInstance = isInstance && "kposRefill" in value;

    return isInstance;
}

export function ApiV2KposBalancesGetPost200ResponseOneOfFromJSON(json: any): ApiV2KposBalancesGetPost200ResponseOneOf {
    return ApiV2KposBalancesGetPost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2KposBalancesGetPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2KposBalancesGetPost200ResponseOneOf {
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

export function ApiV2KposBalancesGetPost200ResponseOneOfToJSON(value?: ApiV2KposBalancesGetPost200ResponseOneOf | null): any {
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
