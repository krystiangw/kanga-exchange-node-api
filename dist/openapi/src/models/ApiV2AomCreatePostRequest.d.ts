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
 * @interface ApiV2AomCreatePostRequest
 */
export interface ApiV2AomCreatePostRequest {
    /**
     * A unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2AomCreatePostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2AomCreatePostRequest
     */
    appId: string;
    /**
     * Order creation market, e.g. 'BTC-USDT'
     * @type {string}
     * @memberof ApiV2AomCreatePostRequest
     */
    marketId: string;
    /**
     * Source currency (i.e. currency to be exchanged).
     * @type {string}
     * @memberof ApiV2AomCreatePostRequest
     */
    currency: string;
    /**
     * Minimum order amount (in source currency), e.g. '12.1234'. Decimal precision depends on currency (up to 18 decimal places).
     * @type {string}
     * @memberof ApiV2AomCreatePostRequest
     */
    minAmount: string;
    /**
     * Maximum order amount (in source currency). May be equal to or greater than minimum amount.
     * @type {string}
     * @memberof ApiV2AomCreatePostRequest
     */
    maxAmount: string;
    /**
     * Minimum delay between orders in seconds (integer).
     * @type {number}
     * @memberof ApiV2AomCreatePostRequest
     */
    minDelay: number;
    /**
     * Maximum delay between orders in seconds (integer). May be equal to or greater than the minimum delay.
     * @type {number}
     * @memberof ApiV2AomCreatePostRequest
     */
    maxDelay: number;
}
/**
 * Check if a given object implements the ApiV2AomCreatePostRequest interface.
 */
export declare function instanceOfApiV2AomCreatePostRequest(value: object): boolean;
export declare function ApiV2AomCreatePostRequestFromJSON(json: any): ApiV2AomCreatePostRequest;
export declare function ApiV2AomCreatePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomCreatePostRequest;
export declare function ApiV2AomCreatePostRequestToJSON(value?: ApiV2AomCreatePostRequest | null): any;
//# sourceMappingURL=ApiV2AomCreatePostRequest.d.ts.map