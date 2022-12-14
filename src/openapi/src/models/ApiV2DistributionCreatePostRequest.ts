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
import type { ApiV2DistributionCreatePostRequestDistributionInner } from './ApiV2DistributionCreatePostRequestDistributionInner';
import {
    ApiV2DistributionCreatePostRequestDistributionInnerFromJSON,
    ApiV2DistributionCreatePostRequestDistributionInnerFromJSONTyped,
    ApiV2DistributionCreatePostRequestDistributionInnerToJSON,
} from './ApiV2DistributionCreatePostRequestDistributionInner';

/**
 * 
 * @export
 * @interface ApiV2DistributionCreatePostRequest
 */
export interface ApiV2DistributionCreatePostRequest {
    /**
     * A unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    appId: string;
    /**
     * Distribution group ID
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    groupId: string;
    /**
     * Distribution currency.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    currency: string;
    /**
     * Distribution title. The length limit is 256 characters.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    title: string;
    /**
     * Availability date.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    availability?: string;
    /**
     * Expiration date.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    expires?: string;
    /**
     * 
     * @type {Array<ApiV2DistributionCreatePostRequestDistributionInner>}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    distribution: Array<ApiV2DistributionCreatePostRequestDistributionInner>;
}

/**
 * Check if a given object implements the ApiV2DistributionCreatePostRequest interface.
 */
export function instanceOfApiV2DistributionCreatePostRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nonce" in value;
    isInstance = isInstance && "appId" in value;
    isInstance = isInstance && "groupId" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "distribution" in value;

    return isInstance;
}

export function ApiV2DistributionCreatePostRequestFromJSON(json: any): ApiV2DistributionCreatePostRequest {
    return ApiV2DistributionCreatePostRequestFromJSONTyped(json, false);
}

export function ApiV2DistributionCreatePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionCreatePostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonce': json['nonce'],
        'appId': json['appId'],
        'groupId': json['groupId'],
        'currency': json['currency'],
        'title': json['title'],
        'availability': !exists(json, 'availability') ? undefined : json['availability'],
        'expires': !exists(json, 'expires') ? undefined : json['expires'],
        'distribution': ((json['distribution'] as Array<any>).map(ApiV2DistributionCreatePostRequestDistributionInnerFromJSON)),
    };
}

export function ApiV2DistributionCreatePostRequestToJSON(value?: ApiV2DistributionCreatePostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonce': value.nonce,
        'appId': value.appId,
        'groupId': value.groupId,
        'currency': value.currency,
        'title': value.title,
        'availability': value.availability,
        'expires': value.expires,
        'distribution': ((value.distribution as Array<any>).map(ApiV2DistributionCreatePostRequestDistributionInnerToJSON)),
    };
}

