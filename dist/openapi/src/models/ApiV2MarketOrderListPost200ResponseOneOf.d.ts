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
import type { ApiV2MarketOrderListPost200ResponseOneOfOrdersInner } from './ApiV2MarketOrderListPost200ResponseOneOfOrdersInner';
/**
 * List of active orders
 * @export
 * @interface ApiV2MarketOrderListPost200ResponseOneOf
 */
export interface ApiV2MarketOrderListPost200ResponseOneOf {
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOf
     */
    result: ApiV2MarketOrderListPost200ResponseOneOfResultEnum;
    /**
     *
     * @type {Array<ApiV2MarketOrderListPost200ResponseOneOfOrdersInner>}
     * @memberof ApiV2MarketOrderListPost200ResponseOneOf
     */
    orders: Array<ApiV2MarketOrderListPost200ResponseOneOfOrdersInner>;
}
/**
 * @export
 */
export declare const ApiV2MarketOrderListPost200ResponseOneOfResultEnum: {
    readonly Ok: "ok";
};
export type ApiV2MarketOrderListPost200ResponseOneOfResultEnum = typeof ApiV2MarketOrderListPost200ResponseOneOfResultEnum[keyof typeof ApiV2MarketOrderListPost200ResponseOneOfResultEnum];
/**
 * Check if a given object implements the ApiV2MarketOrderListPost200ResponseOneOf interface.
 */
export declare function instanceOfApiV2MarketOrderListPost200ResponseOneOf(value: object): boolean;
export declare function ApiV2MarketOrderListPost200ResponseOneOfFromJSON(json: any): ApiV2MarketOrderListPost200ResponseOneOf;
export declare function ApiV2MarketOrderListPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderListPost200ResponseOneOf;
export declare function ApiV2MarketOrderListPost200ResponseOneOfToJSON(value?: ApiV2MarketOrderListPost200ResponseOneOf | null): any;
//# sourceMappingURL=ApiV2MarketOrderListPost200ResponseOneOf.d.ts.map