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
 * @interface ApiV2LabelListPostRequest
 */
export interface ApiV2LabelListPostRequest {
    /**
     * A unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2LabelListPostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2LabelListPostRequest
     */
    appId: string;
}
/**
 * Check if a given object implements the ApiV2LabelListPostRequest interface.
 */
export declare function instanceOfApiV2LabelListPostRequest(value: object): boolean;
export declare function ApiV2LabelListPostRequestFromJSON(json: any): ApiV2LabelListPostRequest;
export declare function ApiV2LabelListPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2LabelListPostRequest;
export declare function ApiV2LabelListPostRequestToJSON(value?: ApiV2LabelListPostRequest | null): any;
//# sourceMappingURL=ApiV2LabelListPostRequest.d.ts.map