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
import type { ApiV2MarketOrderBookPost200ResponseOneOfBidsInner } from './ApiV2MarketOrderBookPost200ResponseOneOfBidsInner';
/**
 * Order canceled successfully
 * @export
 * @interface ApiV2MarketOrderBookPost200ResponseOneOf
 */
export interface ApiV2MarketOrderBookPost200ResponseOneOf {
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketOrderBookPost200ResponseOneOf
     */
    result: ApiV2MarketOrderBookPost200ResponseOneOfResultEnum;
    /**
     *
     * @type {Array<ApiV2MarketOrderBookPost200ResponseOneOfBidsInner>}
     * @memberof ApiV2MarketOrderBookPost200ResponseOneOf
     */
    bids: Array<ApiV2MarketOrderBookPost200ResponseOneOfBidsInner>;
    /**
     *
     * @type {Array<ApiV2MarketOrderBookPost200ResponseOneOfBidsInner>}
     * @memberof ApiV2MarketOrderBookPost200ResponseOneOf
     */
    asks: Array<ApiV2MarketOrderBookPost200ResponseOneOfBidsInner>;
}
/**
 * @export
 */
export declare const ApiV2MarketOrderBookPost200ResponseOneOfResultEnum: {
    readonly Ok: "ok";
};
export type ApiV2MarketOrderBookPost200ResponseOneOfResultEnum = typeof ApiV2MarketOrderBookPost200ResponseOneOfResultEnum[keyof typeof ApiV2MarketOrderBookPost200ResponseOneOfResultEnum];
/**
 * Check if a given object implements the ApiV2MarketOrderBookPost200ResponseOneOf interface.
 */
export declare function instanceOfApiV2MarketOrderBookPost200ResponseOneOf(value: object): boolean;
export declare function ApiV2MarketOrderBookPost200ResponseOneOfFromJSON(json: any): ApiV2MarketOrderBookPost200ResponseOneOf;
export declare function ApiV2MarketOrderBookPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderBookPost200ResponseOneOf;
export declare function ApiV2MarketOrderBookPost200ResponseOneOfToJSON(value?: ApiV2MarketOrderBookPost200ResponseOneOf | null): any;
//# sourceMappingURL=ApiV2MarketOrderBookPost200ResponseOneOf.d.ts.map