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
 * @interface ApiV2WalletListPostRequest
 */
export interface ApiV2WalletListPostRequest {
    /**
     *
     * @type {number}
     * @memberof ApiV2WalletListPostRequest
     */
    nonce: number;
    /**
     *
     * @type {string}
     * @memberof ApiV2WalletListPostRequest
     */
    appId: string;
    /**
     *
     * @type {string}
     * @memberof ApiV2WalletListPostRequest
     */
    walletKey?: string;
}
/**
 * Check if a given object implements the ApiV2WalletListPostRequest interface.
 */
export declare function instanceOfApiV2WalletListPostRequest(value: object): boolean;
export declare function ApiV2WalletListPostRequestFromJSON(json: any): ApiV2WalletListPostRequest;
export declare function ApiV2WalletListPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2WalletListPostRequest;
export declare function ApiV2WalletListPostRequestToJSON(value?: ApiV2WalletListPostRequest | null): any;
//# sourceMappingURL=ApiV2WalletListPostRequest.d.ts.map