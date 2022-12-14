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
 * @interface ApiV2MarketOrderBookPostRequest
 */
export interface ApiV2MarketOrderBookPostRequest {
    /**
     *
     * @type {number}
     * @memberof ApiV2MarketOrderBookPostRequest
     */
    nonce: number;
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketOrderBookPostRequest
     */
    appId: string;
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketOrderBookPostRequest
     */
    market: string;
}
/**
 * Check if a given object implements the ApiV2MarketOrderBookPostRequest interface.
 */
export declare function instanceOfApiV2MarketOrderBookPostRequest(value: object): boolean;
export declare function ApiV2MarketOrderBookPostRequestFromJSON(json: any): ApiV2MarketOrderBookPostRequest;
export declare function ApiV2MarketOrderBookPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderBookPostRequest;
export declare function ApiV2MarketOrderBookPostRequestToJSON(value?: ApiV2MarketOrderBookPostRequest | null): any;
//# sourceMappingURL=ApiV2MarketOrderBookPostRequest.d.ts.map