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
import { ApiV2MarketOrderHistoryListPost200ResponseOneOf } from './ApiV2MarketOrderHistoryListPost200ResponseOneOf';
import { ApiV2PayPaymentGetPost200ResponseOneOf1 } from './ApiV2PayPaymentGetPost200ResponseOneOf1';
import { ApiV2PayPaymentGetPost200ResponseOneOf2 } from './ApiV2PayPaymentGetPost200ResponseOneOf2';
import { ApiV2PayPaymentGetPost200ResponseOneOf3 } from './ApiV2PayPaymentGetPost200ResponseOneOf3';
/**
 * @type ApiV2MarketOrderHistoryListPost200Response
 *
 * @export
 */
export type ApiV2MarketOrderHistoryListPost200Response = ApiV2MarketOrderHistoryListPost200ResponseOneOf | ApiV2PayPaymentGetPost200ResponseOneOf1 | ApiV2PayPaymentGetPost200ResponseOneOf2 | ApiV2PayPaymentGetPost200ResponseOneOf3;
export declare function ApiV2MarketOrderHistoryListPost200ResponseFromJSON(json: any): ApiV2MarketOrderHistoryListPost200Response;
export declare function ApiV2MarketOrderHistoryListPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderHistoryListPost200Response;
export declare function ApiV2MarketOrderHistoryListPost200ResponseToJSON(value?: ApiV2MarketOrderHistoryListPost200Response | null): any;
//# sourceMappingURL=ApiV2MarketOrderHistoryListPost200Response.d.ts.map