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
 * @interface ApiV2AomListPostRequest
 */
export interface ApiV2AomListPostRequest {
    /**
     * Unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2AomListPostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2AomListPostRequest
     */
    appId: string;
}
/**
 * Check if a given object implements the ApiV2AomListPostRequest interface.
 */
export declare function instanceOfApiV2AomListPostRequest(value: object): boolean;
export declare function ApiV2AomListPostRequestFromJSON(json: any): ApiV2AomListPostRequest;
export declare function ApiV2AomListPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomListPostRequest;
export declare function ApiV2AomListPostRequestToJSON(value?: ApiV2AomListPostRequest | null): any;
//# sourceMappingURL=ApiV2AomListPostRequest.d.ts.map