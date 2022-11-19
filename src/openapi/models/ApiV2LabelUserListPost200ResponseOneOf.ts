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
 * @interface ApiV2LabelUserListPost200ResponseOneOf
 */
export interface ApiV2LabelUserListPost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2LabelUserListPost200ResponseOneOf
     */
    result: ApiV2LabelUserListPost200ResponseOneOfResultEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiV2LabelUserListPost200ResponseOneOf
     */
    labels: Array<string>;
}


/**
 * @export
 */
export const ApiV2LabelUserListPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
} as const;
export type ApiV2LabelUserListPost200ResponseOneOfResultEnum = typeof ApiV2LabelUserListPost200ResponseOneOfResultEnum[keyof typeof ApiV2LabelUserListPost200ResponseOneOfResultEnum];


/**
 * Check if a given object implements the ApiV2LabelUserListPost200ResponseOneOf interface.
 */
export function instanceOfApiV2LabelUserListPost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "labels" in value;

    return isInstance;
}

export function ApiV2LabelUserListPost200ResponseOneOfFromJSON(json: any): ApiV2LabelUserListPost200ResponseOneOf {
    return ApiV2LabelUserListPost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2LabelUserListPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2LabelUserListPost200ResponseOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'labels': json['labels'],
    };
}

export function ApiV2LabelUserListPost200ResponseOneOfToJSON(value?: ApiV2LabelUserListPost200ResponseOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'labels': value.labels,
    };
}

