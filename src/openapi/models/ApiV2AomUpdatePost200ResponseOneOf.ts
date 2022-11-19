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
 * AOM not found or active
 * @export
 * @interface ApiV2AomUpdatePost200ResponseOneOf
 */
export interface ApiV2AomUpdatePost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2AomUpdatePost200ResponseOneOf
     */
    result: ApiV2AomUpdatePost200ResponseOneOfResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiV2AomUpdatePost200ResponseOneOf
     */
    code: ApiV2AomUpdatePost200ResponseOneOfCodeEnum;
}


/**
 * @export
 */
export const ApiV2AomUpdatePost200ResponseOneOfResultEnum = {
    Fail: 'fail'
} as const;
export type ApiV2AomUpdatePost200ResponseOneOfResultEnum = typeof ApiV2AomUpdatePost200ResponseOneOfResultEnum[keyof typeof ApiV2AomUpdatePost200ResponseOneOfResultEnum];

/**
 * @export
 */
export const ApiV2AomUpdatePost200ResponseOneOfCodeEnum = {
    NUMBER_9002: 9002
} as const;
export type ApiV2AomUpdatePost200ResponseOneOfCodeEnum = typeof ApiV2AomUpdatePost200ResponseOneOfCodeEnum[keyof typeof ApiV2AomUpdatePost200ResponseOneOfCodeEnum];


/**
 * Check if a given object implements the ApiV2AomUpdatePost200ResponseOneOf interface.
 */
export function instanceOfApiV2AomUpdatePost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiV2AomUpdatePost200ResponseOneOfFromJSON(json: any): ApiV2AomUpdatePost200ResponseOneOf {
    return ApiV2AomUpdatePost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2AomUpdatePost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomUpdatePost200ResponseOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiV2AomUpdatePost200ResponseOneOfToJSON(value?: ApiV2AomUpdatePost200ResponseOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'code': value.code,
    };
}

