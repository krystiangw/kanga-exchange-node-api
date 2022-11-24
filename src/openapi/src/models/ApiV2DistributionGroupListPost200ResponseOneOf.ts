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
import type { ApiV2DistributionGroupListPost200ResponseOneOfListInner } from './ApiV2DistributionGroupListPost200ResponseOneOfListInner';
import {
    ApiV2DistributionGroupListPost200ResponseOneOfListInnerFromJSON,
    ApiV2DistributionGroupListPost200ResponseOneOfListInnerFromJSONTyped,
    ApiV2DistributionGroupListPost200ResponseOneOfListInnerToJSON,
} from './ApiV2DistributionGroupListPost200ResponseOneOfListInner';

/**
 * 
 * @export
 * @interface ApiV2DistributionGroupListPost200ResponseOneOf
 */
export interface ApiV2DistributionGroupListPost200ResponseOneOf {
    /**
     * 
     * @type {string}
     * @memberof ApiV2DistributionGroupListPost200ResponseOneOf
     */
    result: ApiV2DistributionGroupListPost200ResponseOneOfResultEnum;
    /**
     * 
     * @type {Array<ApiV2DistributionGroupListPost200ResponseOneOfListInner>}
     * @memberof ApiV2DistributionGroupListPost200ResponseOneOf
     */
    list: Array<ApiV2DistributionGroupListPost200ResponseOneOfListInner>;
}


/**
 * @export
 */
export const ApiV2DistributionGroupListPost200ResponseOneOfResultEnum = {
    Ok: 'ok'
} as const;
export type ApiV2DistributionGroupListPost200ResponseOneOfResultEnum = typeof ApiV2DistributionGroupListPost200ResponseOneOfResultEnum[keyof typeof ApiV2DistributionGroupListPost200ResponseOneOfResultEnum];


/**
 * Check if a given object implements the ApiV2DistributionGroupListPost200ResponseOneOf interface.
 */
export function instanceOfApiV2DistributionGroupListPost200ResponseOneOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "list" in value;

    return isInstance;
}

export function ApiV2DistributionGroupListPost200ResponseOneOfFromJSON(json: any): ApiV2DistributionGroupListPost200ResponseOneOf {
    return ApiV2DistributionGroupListPost200ResponseOneOfFromJSONTyped(json, false);
}

export function ApiV2DistributionGroupListPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionGroupListPost200ResponseOneOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'list': ((json['list'] as Array<any>).map(ApiV2DistributionGroupListPost200ResponseOneOfListInnerFromJSON)),
    };
}

export function ApiV2DistributionGroupListPost200ResponseOneOfToJSON(value?: ApiV2DistributionGroupListPost200ResponseOneOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'list': ((value.list as Array<any>).map(ApiV2DistributionGroupListPost200ResponseOneOfListInnerToJSON)),
    };
}
