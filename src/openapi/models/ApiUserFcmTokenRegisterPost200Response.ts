/* tslint:disable */
/* eslint-disable */
/**
 * Kanga.exchange API
 * This is API generated from kanga.exchange code.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@kanga.exchange
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ApiAdminMarketTickerAddPost200ResponseOneOf,
    instanceOfApiAdminMarketTickerAddPost200ResponseOneOf,
    ApiAdminMarketTickerAddPost200ResponseOneOfFromJSON,
    ApiAdminMarketTickerAddPost200ResponseOneOfFromJSONTyped,
    ApiAdminMarketTickerAddPost200ResponseOneOfToJSON,
} from './ApiAdminMarketTickerAddPost200ResponseOneOf';
import {
    ApiUserFcmTokenRegisterPost200ResponseOneOf,
    instanceOfApiUserFcmTokenRegisterPost200ResponseOneOf,
    ApiUserFcmTokenRegisterPost200ResponseOneOfFromJSON,
    ApiUserFcmTokenRegisterPost200ResponseOneOfFromJSONTyped,
    ApiUserFcmTokenRegisterPost200ResponseOneOfToJSON,
} from './ApiUserFcmTokenRegisterPost200ResponseOneOf';

/**
 * @type ApiUserFcmTokenRegisterPost200Response
 * 
 * @export
 */
export type ApiUserFcmTokenRegisterPost200Response = ApiAdminMarketTickerAddPost200ResponseOneOf | ApiUserFcmTokenRegisterPost200ResponseOneOf;

export function ApiUserFcmTokenRegisterPost200ResponseFromJSON(json: any): ApiUserFcmTokenRegisterPost200Response {
    return ApiUserFcmTokenRegisterPost200ResponseFromJSONTyped(json, false);
}

export function ApiUserFcmTokenRegisterPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiUserFcmTokenRegisterPost200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiAdminMarketTickerAddPost200ResponseOneOfFromJSONTyped(json, true), ...ApiUserFcmTokenRegisterPost200ResponseOneOfFromJSONTyped(json, true) };
}

export function ApiUserFcmTokenRegisterPost200ResponseToJSON(value?: ApiUserFcmTokenRegisterPost200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApiAdminMarketTickerAddPost200ResponseOneOf(value)) {
        return ApiAdminMarketTickerAddPost200ResponseOneOfToJSON(value as ApiAdminMarketTickerAddPost200ResponseOneOf);
    }
    if (instanceOfApiUserFcmTokenRegisterPost200ResponseOneOf(value)) {
        return ApiUserFcmTokenRegisterPost200ResponseOneOfToJSON(value as ApiUserFcmTokenRegisterPost200ResponseOneOf);
    }

    return {};
}

