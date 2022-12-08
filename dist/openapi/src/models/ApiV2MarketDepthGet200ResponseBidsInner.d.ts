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
/**
 *
 * @export
 * @interface ApiV2MarketDepthGet200ResponseBidsInner
 */
export interface ApiV2MarketDepthGet200ResponseBidsInner {
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketDepthGet200ResponseBidsInner
     */
    price: string;
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketDepthGet200ResponseBidsInner
     */
    quantity: string;
}
/**
 * Check if a given object implements the ApiV2MarketDepthGet200ResponseBidsInner interface.
 */
export declare function instanceOfApiV2MarketDepthGet200ResponseBidsInner(value: object): boolean;
export declare function ApiV2MarketDepthGet200ResponseBidsInnerFromJSON(json: any): ApiV2MarketDepthGet200ResponseBidsInner;
export declare function ApiV2MarketDepthGet200ResponseBidsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketDepthGet200ResponseBidsInner;
export declare function ApiV2MarketDepthGet200ResponseBidsInnerToJSON(value?: ApiV2MarketDepthGet200ResponseBidsInner | null): any;
//# sourceMappingURL=ApiV2MarketDepthGet200ResponseBidsInner.d.ts.map