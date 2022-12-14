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
    ApiV2AomCreatePost200ResponseOneOf,
    instanceOfApiV2AomCreatePost200ResponseOneOf,
    ApiV2AomCreatePost200ResponseOneOfFromJSON,
    ApiV2AomCreatePost200ResponseOneOfFromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOfToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf';
import {
    ApiV2AomCreatePost200ResponseOneOf1,
    instanceOfApiV2AomCreatePost200ResponseOneOf1,
    ApiV2AomCreatePost200ResponseOneOf1FromJSON,
    ApiV2AomCreatePost200ResponseOneOf1FromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOf1ToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf1';
import {
    ApiV2AomCreatePost200ResponseOneOf2,
    instanceOfApiV2AomCreatePost200ResponseOneOf2,
    ApiV2AomCreatePost200ResponseOneOf2FromJSON,
    ApiV2AomCreatePost200ResponseOneOf2FromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOf2ToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf2';
import {
    ApiV2AomCreatePost200ResponseOneOf3,
    instanceOfApiV2AomCreatePost200ResponseOneOf3,
    ApiV2AomCreatePost200ResponseOneOf3FromJSON,
    ApiV2AomCreatePost200ResponseOneOf3FromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOf3ToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf3';
import {
    ApiV2AomCreatePost200ResponseOneOf4,
    instanceOfApiV2AomCreatePost200ResponseOneOf4,
    ApiV2AomCreatePost200ResponseOneOf4FromJSON,
    ApiV2AomCreatePost200ResponseOneOf4FromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOf4ToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf4';
import {
    ApiV2AomCreatePost200ResponseOneOf5,
    instanceOfApiV2AomCreatePost200ResponseOneOf5,
    ApiV2AomCreatePost200ResponseOneOf5FromJSON,
    ApiV2AomCreatePost200ResponseOneOf5FromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOf5ToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf5';
import {
    ApiV2AomCreatePost200ResponseOneOf6,
    instanceOfApiV2AomCreatePost200ResponseOneOf6,
    ApiV2AomCreatePost200ResponseOneOf6FromJSON,
    ApiV2AomCreatePost200ResponseOneOf6FromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOf6ToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf6';
import {
    ApiV2AomCreatePost200ResponseOneOf7,
    instanceOfApiV2AomCreatePost200ResponseOneOf7,
    ApiV2AomCreatePost200ResponseOneOf7FromJSON,
    ApiV2AomCreatePost200ResponseOneOf7FromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOf7ToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf7';
import {
    ApiV2AomCreatePost200ResponseOneOf8,
    instanceOfApiV2AomCreatePost200ResponseOneOf8,
    ApiV2AomCreatePost200ResponseOneOf8FromJSON,
    ApiV2AomCreatePost200ResponseOneOf8FromJSONTyped,
    ApiV2AomCreatePost200ResponseOneOf8ToJSON,
} from './ApiV2AomCreatePost200ResponseOneOf8';
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
 * @type ApiV2AomCreatePost200Response
 * 
 * @export
 */
export type ApiV2AomCreatePost200Response = ApiV2AomCreatePost200ResponseOneOf | ApiV2AomCreatePost200ResponseOneOf1 | ApiV2AomCreatePost200ResponseOneOf2 | ApiV2AomCreatePost200ResponseOneOf3 | ApiV2AomCreatePost200ResponseOneOf4 | ApiV2AomCreatePost200ResponseOneOf5 | ApiV2AomCreatePost200ResponseOneOf6 | ApiV2AomCreatePost200ResponseOneOf7 | ApiV2AomCreatePost200ResponseOneOf8 | ApiV2PayPaymentGetPost200ResponseOneOf1 | ApiV2PayPaymentGetPost200ResponseOneOf2 | ApiV2PayPaymentGetPost200ResponseOneOf3;

export function ApiV2AomCreatePost200ResponseFromJSON(json: any): ApiV2AomCreatePost200Response {
    return ApiV2AomCreatePost200ResponseFromJSONTyped(json, false);
}

export function ApiV2AomCreatePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomCreatePost200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApiV2AomCreatePost200ResponseOneOfFromJSONTyped(json, true), ...ApiV2AomCreatePost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2AomCreatePost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2AomCreatePost200ResponseOneOf3FromJSONTyped(json, true), ...ApiV2AomCreatePost200ResponseOneOf4FromJSONTyped(json, true), ...ApiV2AomCreatePost200ResponseOneOf5FromJSONTyped(json, true), ...ApiV2AomCreatePost200ResponseOneOf6FromJSONTyped(json, true), ...ApiV2AomCreatePost200ResponseOneOf7FromJSONTyped(json, true), ...ApiV2AomCreatePost200ResponseOneOf8FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf1FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped(json, true), ...ApiV2PayPaymentGetPost200ResponseOneOf3FromJSONTyped(json, true) };
}

export function ApiV2AomCreatePost200ResponseToJSON(value?: ApiV2AomCreatePost200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApiV2AomCreatePost200ResponseOneOf(value)) {
        return ApiV2AomCreatePost200ResponseOneOfToJSON(value as ApiV2AomCreatePost200ResponseOneOf);
    }
    if (instanceOfApiV2AomCreatePost200ResponseOneOf1(value)) {
        return ApiV2AomCreatePost200ResponseOneOf1ToJSON(value as ApiV2AomCreatePost200ResponseOneOf1);
    }
    if (instanceOfApiV2AomCreatePost200ResponseOneOf2(value)) {
        return ApiV2AomCreatePost200ResponseOneOf2ToJSON(value as ApiV2AomCreatePost200ResponseOneOf2);
    }
    if (instanceOfApiV2AomCreatePost200ResponseOneOf3(value)) {
        return ApiV2AomCreatePost200ResponseOneOf3ToJSON(value as ApiV2AomCreatePost200ResponseOneOf3);
    }
    if (instanceOfApiV2AomCreatePost200ResponseOneOf4(value)) {
        return ApiV2AomCreatePost200ResponseOneOf4ToJSON(value as ApiV2AomCreatePost200ResponseOneOf4);
    }
    if (instanceOfApiV2AomCreatePost200ResponseOneOf5(value)) {
        return ApiV2AomCreatePost200ResponseOneOf5ToJSON(value as ApiV2AomCreatePost200ResponseOneOf5);
    }
    if (instanceOfApiV2AomCreatePost200ResponseOneOf6(value)) {
        return ApiV2AomCreatePost200ResponseOneOf6ToJSON(value as ApiV2AomCreatePost200ResponseOneOf6);
    }
    if (instanceOfApiV2AomCreatePost200ResponseOneOf7(value)) {
        return ApiV2AomCreatePost200ResponseOneOf7ToJSON(value as ApiV2AomCreatePost200ResponseOneOf7);
    }
    if (instanceOfApiV2AomCreatePost200ResponseOneOf8(value)) {
        return ApiV2AomCreatePost200ResponseOneOf8ToJSON(value as ApiV2AomCreatePost200ResponseOneOf8);
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

