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
 * @interface ApiV2KposBalancesGetPostRequest
 */
export interface ApiV2KposBalancesGetPostRequest {
    /**
     * Unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2KposBalancesGetPostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2KposBalancesGetPostRequest
     */
    appId: string;
    /**
     * KPOS ID
     * @type {string}
     * @memberof ApiV2KposBalancesGetPostRequest
     */
    kposId: string;
}
/**
 * Check if a given object implements the ApiV2KposBalancesGetPostRequest interface.
 */
export declare function instanceOfApiV2KposBalancesGetPostRequest(value: object): boolean;
export declare function ApiV2KposBalancesGetPostRequestFromJSON(json: any): ApiV2KposBalancesGetPostRequest;
export declare function ApiV2KposBalancesGetPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2KposBalancesGetPostRequest;
export declare function ApiV2KposBalancesGetPostRequestToJSON(value?: ApiV2KposBalancesGetPostRequest | null): any;
//# sourceMappingURL=ApiV2KposBalancesGetPostRequest.d.ts.map