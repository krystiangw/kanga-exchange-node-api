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
    ApiV2MarketOrderCreatePost200ResponseOneOf,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf,
    ApiV2MarketOrderCreatePost200ResponseOneOfFromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOfFromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOfToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf';
import {
    ApiV2MarketOrderCreatePost200ResponseOneOf1,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf1,
    ApiV2MarketOrderCreatePost200ResponseOneOf1FromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOf1FromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOf1ToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf1';
import {
    ApiV2MarketOrderCreatePost200ResponseOneOf2,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf2,
    ApiV2MarketOrderCreatePost200ResponseOneOf2FromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOf2FromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOf2ToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf2';
import {
    ApiV2MarketOrderCreatePost200ResponseOneOf3,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf3,
    ApiV2MarketOrderCreatePost200ResponseOneOf3FromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOf3FromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOf3ToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf3';
import {
    ApiV2MarketOrderCreatePost200ResponseOneOf4,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf4,
    ApiV2MarketOrderCreatePost200ResponseOneOf4FromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOf4FromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOf4ToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf4';
import {
    ApiV2MarketOrderCreatePost200ResponseOneOf5,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf5,
    ApiV2MarketOrderCreatePost200ResponseOneOf5FromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOf5FromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOf5ToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf5';
import {
    ApiV2MarketOrderCreatePost200ResponseOneOf6,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf6,
    ApiV2MarketOrderCreatePost200ResponseOneOf6FromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOf6FromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOf6ToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf6';
import {
    ApiV2MarketOrderCreatePost200ResponseOneOf7,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf7,
    ApiV2MarketOrderCreatePost200ResponseOneOf7FromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOf7FromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOf7ToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf7';
import {
    ApiV2MarketOrderCreatePost200ResponseOneOf8,
    instanceOfApiV2MarketOrderCreatePost200ResponseOneOf8,
    ApiV2MarketOrderCreatePost200ResponseOneOf8FromJSON,
    ApiV2MarketOrderCreatePost200ResponseOneOf8FromJSONTyped,
    ApiV2MarketOrderCreatePost200ResponseOneOf8ToJSON,
} from './ApiV2MarketOrderCreatePost200ResponseOneOf8';
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
 * @type ApiV2MarketOrderCreatePost200Response
 * 
 * @export
 */
export type ApiV2MarketOrderCreatePost200Response = ApiV2MarketOrderCreatePost200ResponseOneOf | ApiV2MarketOrderCreatePost200ResponseOneOf1 | ApiV2MarketOrderCreatePost200ResponseOneOf2 | ApiV2MarketOrderCreatePost200ResponseOneOf3 | ApiV2MarketOrderCreatePost200ResponseOneOf4 | ApiV2MarketOrderCreatePost200ResponseOneOf5 | ApiV2MarketOrderCreatePost200ResponseOneOf6 | ApiV2MarketOrderCreatePost200ResponseOneOf7 | ApiV2MarketOrderCreatePost200ResponseOneOf8 | ApiV2PayPaymentGetPost200ResponseOneOf1 | ApiV2PayPaymentGetPost200ResponseOneOf2 | ApiV2PayPaymentGetPost200ResponseOneOf3;

export function ApiV2MarketOrderCreatePost200ResponseFromJSON(json: any): ApiV2MarketOrderCreatePost200Response {
    return ApiV2MarketOrderCreatePost200ResponseFromJSONTyped(json, false);
}

export function ApiV2MarketOrderCreatePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderCreatePost200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2MarketOrderCreatePost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf3FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf4FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf5FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf6FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf7FromJSONTyped(json, true), ...ApiV2MarketOrderCreatePost200ResponseOneOf8FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped(json, true) };
}

export function ApiV2MarketOrderCreatePost200ResponseToJSON(value?: ApiV2MarketOrderCreatePost200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOfToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf1(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf1ToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf1);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf2(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf2ToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf2);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf3(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf3ToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf3);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf4(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf4ToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf4);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf5(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf5ToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf5);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf6(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf6ToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf6);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf7(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf7ToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf7);
    }
    if (instanceOfApiV2MarketOrderCreatePost200ResponseOneOf8(value)) {
        return ApiV2MarketOrderCreatePost200ResponseOneOf8ToJSON(value as ApiV2MarketOrderCreatePost200ResponseOneOf8);
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

