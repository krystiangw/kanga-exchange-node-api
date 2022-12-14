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
    ApiV2PayPaymentCreatePost200ResponseOneOf,
    instanceOfApiV2PayPaymentCreatePost200ResponseOneOf,
    ApiV2PayPaymentCreatePost200ResponseOneOfFromJSON,
    ApiV2PayPaymentCreatePost200ResponseOneOfFromJSONTyped,
    ApiV2PayPaymentCreatePost200ResponseOneOfToJSON,
} from './ApiV2PayPaymentCreatePost200ResponseOneOf';
import {
    ApiV2PayPaymentCreatePost200ResponseOneOf1,
    instanceOfApiV2PayPaymentCreatePost200ResponseOneOf1,
    ApiV2PayPaymentCreatePost200ResponseOneOf1FromJSON,
    ApiV2PayPaymentCreatePost200ResponseOneOf1FromJSONTyped,
    ApiV2PayPaymentCreatePost200ResponseOneOf1ToJSON,
} from './ApiV2PayPaymentCreatePost200ResponseOneOf1';
import {
    ApiV2PayPaymentCreatePost200ResponseOneOf2,
    instanceOfApiV2PayPaymentCreatePost200ResponseOneOf2,
    ApiV2PayPaymentCreatePost200ResponseOneOf2FromJSON,
    ApiV2PayPaymentCreatePost200ResponseOneOf2FromJSONTyped,
    ApiV2PayPaymentCreatePost200ResponseOneOf2ToJSON,
} from './ApiV2PayPaymentCreatePost200ResponseOneOf2';
import {
    ApiV2PayPaymentCreatePost200ResponseOneOf3,
    instanceOfApiV2PayPaymentCreatePost200ResponseOneOf3,
    ApiV2PayPaymentCreatePost200ResponseOneOf3FromJSON,
    ApiV2PayPaymentCreatePost200ResponseOneOf3FromJSONTyped,
    ApiV2PayPaymentCreatePost200ResponseOneOf3ToJSON,
} from './ApiV2PayPaymentCreatePost200ResponseOneOf3';
import {
    ApiV2PayPaymentCreatePost200ResponseOneOf4,
    instanceOfApiV2PayPaymentCreatePost200ResponseOneOf4,
    ApiV2PayPaymentCreatePost200ResponseOneOf4FromJSON,
    ApiV2PayPaymentCreatePost200ResponseOneOf4FromJSONTyped,
    ApiV2PayPaymentCreatePost200ResponseOneOf4ToJSON,
} from './ApiV2PayPaymentCreatePost200ResponseOneOf4';
import {
    ApiV2PayPaymentCreatePost200ResponseOneOf5,
    instanceOfApiV2PayPaymentCreatePost200ResponseOneOf5,
    ApiV2PayPaymentCreatePost200ResponseOneOf5FromJSON,
    ApiV2PayPaymentCreatePost200ResponseOneOf5FromJSONTyped,
    ApiV2PayPaymentCreatePost200ResponseOneOf5ToJSON,
} from './ApiV2PayPaymentCreatePost200ResponseOneOf5';
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

/**
 * @type ApiV2PayPaymentCreatePost200Response
 * 
 * @export
 */
export type ApiV2PayPaymentCreatePost200Response = ApiV2PayPaymentCreatePost200ResponseOneOf | ApiV2PayPaymentCreatePost200ResponseOneOf1 | ApiV2PayPaymentCreatePost200ResponseOneOf2 | ApiV2PayPaymentCreatePost200ResponseOneOf3 | ApiV2PayPaymentCreatePost200ResponseOneOf4 | ApiV2PayPaymentCreatePost200ResponseOneOf5 | ApiV2PayPaymentGetPost200ResponseOneOf1 | ApiV2PayPaymentGetPost200ResponseOneOf2 | ApiV2PayPaymentGetPost200ResponseOneOf3;

export function ApiV2PayPaymentCreatePost200ResponseFromJSON(json: any): ApiV2PayPaymentCreatePost200Response {
    return ApiV2PayPaymentCreatePost200ResponseFromJSONTyped(json, false);
}

export function ApiV2PayPaymentCreatePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayPaymentCreatePost200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2PayPaymentCreatePost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2PayPaymentCreatePost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2PayPaymentCreatePost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2PayPaymentCreatePost200ResponseOneOf3FromJSONTyped(json, true), ...ApiV2PayPaymentCreatePost200ResponseOneOf4FromJSONTyped(json, true), ...ApiV2PayPaymentCreatePost200ResponseOneOf5FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped(json, true) };
}

export function ApiV2PayPaymentCreatePost200ResponseToJSON(value?: ApiV2PayPaymentCreatePost200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApiV2PayPaymentCreatePost200ResponseOneOf(value)) {
        return ApiV2PayPaymentCreatePost200ResponseOneOfToJSON(value as ApiV2PayPaymentCreatePost200ResponseOneOf);
    }
    if (instanceOfApiV2PayPaymentCreatePost200ResponseOneOf1(value)) {
        return ApiV2PayPaymentCreatePost200ResponseOneOf1ToJSON(value as ApiV2PayPaymentCreatePost200ResponseOneOf1);
    }
    if (instanceOfApiV2PayPaymentCreatePost200ResponseOneOf2(value)) {
        return ApiV2PayPaymentCreatePost200ResponseOneOf2ToJSON(value as ApiV2PayPaymentCreatePost200ResponseOneOf2);
    }
    if (instanceOfApiV2PayPaymentCreatePost200ResponseOneOf3(value)) {
        return ApiV2PayPaymentCreatePost200ResponseOneOf3ToJSON(value as ApiV2PayPaymentCreatePost200ResponseOneOf3);
    }
    if (instanceOfApiV2PayPaymentCreatePost200ResponseOneOf4(value)) {
        return ApiV2PayPaymentCreatePost200ResponseOneOf4ToJSON(value as ApiV2PayPaymentCreatePost200ResponseOneOf4);
    }
    if (instanceOfApiV2PayPaymentCreatePost200ResponseOneOf5(value)) {
        return ApiV2PayPaymentCreatePost200ResponseOneOf5ToJSON(value as ApiV2PayPaymentCreatePost200ResponseOneOf5);
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

    return {};
}

