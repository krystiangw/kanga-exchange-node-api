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
    ApiV2PayPaymentGetPost200ResponseOneOf,
    instanceOfApiV2PayPaymentGetPost200ResponseOneOf,
    ApiV2PayPaymentGetPost200ResponseOneOfFromJSON,
    ApiV2PayPaymentGetPost200ResponseOneOfFromJSONTyped,
    ApiV2PayPaymentGetPost200ResponseOneOfToJSON,
} from './ApiV2PayPaymentGetPost200ResponseOneOf';
import {
    ApiV2PayPaymentGetPost200ResponseOneOf1,
    instanceOfApiV2PayPaymentGetPost200ResponseOneOf1,
    ApiV2PayPaymentGetPost200ResponseOneOf1FromJSON,
    ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped,
    ApiV2PayPaymentGetPost200ResponseOneOf1ToJSON,
} from './ApiV2PayPaymentGetPost200ResponseOneOf1';
import {
    ApiV2PayPaymentGetPost200ResponseOneOf2,
    instanceOfApiV2PayPaymentGetPost200ResponseOneOf2,
    ApiV2PayPaymentGetPost200ResponseOneOf2FromJSON,
    ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped,
    ApiV2PayPaymentGetPost200ResponseOneOf2ToJSON,
} from './ApiV2PayPaymentGetPost200ResponseOneOf2';
import {
    ApiV2PayPaymentGetPost200ResponseOneOf3,
    instanceOfApiV2PayPaymentGetPost200ResponseOneOf3,
    ApiV2PayPaymentGetPost200ResponseOneOf3FromJSON,
    ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped,
    ApiV2PayPaymentGetPost200ResponseOneOf3ToJSON,
} from './ApiV2PayPaymentGetPost200ResponseOneOf3';
import {
    ApiV2PayPaymentGetPost200ResponseOneOf4,
    instanceOfApiV2PayPaymentGetPost200ResponseOneOf4,
    ApiV2PayPaymentGetPost200ResponseOneOf4FromJSON,
    ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped,
    ApiV2PayPaymentGetPost200ResponseOneOf4ToJSON,
} from './ApiV2PayPaymentGetPost200ResponseOneOf4';

/**
 * @type ApiV2PayPaymentGetPost200Response
 * 
 * @export
 */
export type ApiV2PayPaymentGetPost200Response = ApiV2PayPaymentGetPost200ResponseOneOf | ApiV2PayPaymentGetPost200ResponseOneOf1 | ApiV2PayPaymentGetPost200ResponseOneOf2 | ApiV2PayPaymentGetPost200ResponseOneOf3 | ApiV2PayPaymentGetPost200ResponseOneOf4;

export function ApiV2PayPaymentGetPost200ResponseFromJSON(json: any): ApiV2PayPaymentGetPost200Response {
    return ApiV2PayPaymentGetPost200ResponseFromJSONTyped(json, false);
}

export function ApiV2PayPaymentGetPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayPaymentGetPost200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2PayPaymentGetPost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf4FromJSONTyped(json, true) };
}

export function ApiV2PayPaymentGetPost200ResponseToJSON(value?: ApiV2PayPaymentGetPost200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApiV2PayPaymentGetPost200ResponseOneOf(value)) {
        return ApiV2PayPaymentGetPost200ResponseOneOfToJSON(value as ApiV2PayPaymentGetPost200ResponseOneOf);
    }
    if (instanceOfApiV2PayPaymentGetPost200ResponseOneOf1(value)) {
        return ApiV2PayPaymentGetPost200ResponseOneOf1ToJSON(value as ApiV2PayPaymentGetPost200ResponseOneOf1);
    }
    if (instanceOfApiV2PayPaymentGetPost200ResponseOneOf2(value)) {
        return ApiV2PayPaymentGetPost200ResponseOneOf2ToJSON(value as ApiV2PayPaymentGetPost200ResponseOneOf2);
    }
    if (instanceOfApiV2PayPaymentGetPost200ResponseOneOf3(value)) {
        return ApiV2PayPaymentGetPost200ResponseOneOf3ToJSON(value as ApiV2PayPaymentGetPost200ResponseOneOf3);
    }
    if (instanceOfApiV2PayPaymentGetPost200ResponseOneOf4(value)) {
        return ApiV2PayPaymentGetPost200ResponseOneOf4ToJSON(value as ApiV2PayPaymentGetPost200ResponseOneOf4);
    }

    return {};
}

