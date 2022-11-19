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

import {
    ApiV2MarketChangesGet200ResponseOneOf,
    instanceOfApiV2MarketChangesGet200ResponseOneOf,
    ApiV2MarketChangesGet200ResponseOneOfFromJSON,
    ApiV2MarketChangesGet200ResponseOneOfFromJSONTyped,
    ApiV2MarketChangesGet200ResponseOneOfToJSON,
} from './ApiV2MarketChangesGet200ResponseOneOf';
import {
    ApiV2MarketChangesGet200ResponseOneOf1,
    instanceOfApiV2MarketChangesGet200ResponseOneOf1,
    ApiV2MarketChangesGet200ResponseOneOf1FromJSON,
    ApiV2MarketChangesGet200ResponseOneOf1FromJSONTyped,
    ApiV2MarketChangesGet200ResponseOneOf1ToJSON,
} from './ApiV2MarketChangesGet200ResponseOneOf1';

/**
 * @type ApiV2MarketChangesGet200Response
 * 
 * @export
 */
export type ApiV2MarketChangesGet200Response = ApiV2MarketChangesGet200ResponseOneOf | ApiV2MarketChangesGet200ResponseOneOf1;

export function ApiV2MarketChangesGet200ResponseFromJSON(json: any): ApiV2MarketChangesGet200Response {
    return ApiV2MarketChangesGet200ResponseFromJSONTyped(json, false);
}

export function ApiV2MarketChangesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketChangesGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2MarketChangesGet200ResponseOneOfFromJSONTyped(json, true), ...ApiV2MarketChangesGet200ResponseOneOf1FromJSONTyped(json, true) };
}

export function ApiV2MarketChangesGet200ResponseToJSON(value?: ApiV2MarketChangesGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApiV2MarketChangesGet200ResponseOneOf(value)) {
        return ApiV2MarketChangesGet200ResponseOneOfToJSON(value as ApiV2MarketChangesGet200ResponseOneOf);
    }
    if (instanceOfApiV2MarketChangesGet200ResponseOneOf1(value)) {
        return ApiV2MarketChangesGet200ResponseOneOf1ToJSON(value as ApiV2MarketChangesGet200ResponseOneOf1);
    }

    return {};
}

