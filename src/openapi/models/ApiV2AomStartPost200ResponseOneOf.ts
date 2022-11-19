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
 * @interface ApiV2AomStartPost200ResponseOneOf
 */
export interface ApiV2AomStartPost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2AomStartPost200ResponseOneOf
     */
    result: ApiV2AomStartPost200ResponseOneOfResultEnum;
}


/**
 * @export
 */
export const ApiV2AomStartPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
} as const;
export type ApiV2AomStartPost200ResponseOneOfResultEnum = typeof ApiV2AomStartPost200ResponseOneOfResultEnum[keyof typeof ApiV2AomStartPost200ResponseOneOfResultEnum];


/**
 * Check if a given object implements the ApiV2AomStartPost200ResponseOneOf interface.
 */
export function instanceOfApiV2AomStartPost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;

    return isInstance;
}

export function ApiV2AomStartPost200ResponseOneOfFromJSON(json: any): ApiV2AomStartPost200ResponseOneOf {
    return ApiV2AomStartPost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2AomStartPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomStartPost200ResponseOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
    };
}

export function ApiV2AomStartPost200ResponseOneOfToJSON(value?: ApiV2AomStartPost200ResponseOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
    };
}

