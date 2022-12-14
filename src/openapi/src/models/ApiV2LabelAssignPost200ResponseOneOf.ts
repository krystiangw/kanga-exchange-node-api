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
 * Insufficient permission to assign a label
 * @export
 * @interface ApiV2LabelAssignPost200ResponseOneOf
 */
export interface ApiV2LabelAssignPost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2LabelAssignPost200ResponseOneOf
     */
    result: ApiV2LabelAssignPost200ResponseOneOfResultEnum;
    /**
     * 
     * @type {number}
     * @memberof ApiV2LabelAssignPost200ResponseOneOf
     */
    code: ApiV2LabelAssignPost200ResponseOneOfCodeEnum;
}


/**
 * @export
 */
export const ApiV2LabelAssignPost200ResponseOneOfResultEnum = {
    Fail: 'fail'
} as const;
export type ApiV2LabelAssignPost200ResponseOneOfResultEnum = typeof ApiV2LabelAssignPost200ResponseOneOfResultEnum[keyof typeof ApiV2LabelAssignPost200ResponseOneOfResultEnum];

/**
 * @export
 */
export const ApiV2LabelAssignPost200ResponseOneOfCodeEnum = {
    NUMBER_9000: 9000
} as const;
export type ApiV2LabelAssignPost200ResponseOneOfCodeEnum = typeof ApiV2LabelAssignPost200ResponseOneOfCodeEnum[keyof typeof ApiV2LabelAssignPost200ResponseOneOfCodeEnum];


/**
 * Check if a given object implements the ApiV2LabelAssignPost200ResponseOneOf interface.
 */
export function instanceOfApiV2LabelAssignPost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ApiV2LabelAssignPost200ResponseOneOfFromJSON(json: any): ApiV2LabelAssignPost200ResponseOneOf {
    return ApiV2LabelAssignPost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2LabelAssignPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2LabelAssignPost200ResponseOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'code': json['code'],
    };
}

export function ApiV2LabelAssignPost200ResponseOneOfToJSON(value?: ApiV2LabelAssignPost200ResponseOneOf | null): any {
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

