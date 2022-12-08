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
import type { ApiV2DistributionCreatePostRequestDistributionInner } from './ApiV2DistributionCreatePostRequestDistributionInner';
/**
 *
 * @export
 * @interface ApiV2DistributionCreatePostRequest
 */
export interface ApiV2DistributionCreatePostRequest {
    /**
     * A unique request identifier, e.g. a timestamp in milliseconds
     * @type {number}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    nonce: number;
    /**
     * Your public key
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    appId: string;
    /**
     * Distribution group ID
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    groupId: string;
    /**
     * Distribution currency.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    currency: string;
    /**
     * Distribution title. The length limit is 256 characters.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    title: string;
    /**
     * Availability date.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    availability?: string;
    /**
     * Expiration date.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    expires?: string;
    /**
     *
     * @type {Array<ApiV2DistributionCreatePostRequestDistributionInner>}
     * @memberof ApiV2DistributionCreatePostRequest
     */
    distribution: Array<ApiV2DistributionCreatePostRequestDistributionInner>;
}
/**
 * Check if a given object implements the ApiV2DistributionCreatePostRequest interface.
 */
export declare function instanceOfApiV2DistributionCreatePostRequest(value: object): boolean;
export declare function ApiV2DistributionCreatePostRequestFromJSON(json: any): ApiV2DistributionCreatePostRequest;
export declare function ApiV2DistributionCreatePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionCreatePostRequest;
export declare function ApiV2DistributionCreatePostRequestToJSON(value?: ApiV2DistributionCreatePostRequest | null): any;
//# sourceMappingURL=ApiV2DistributionCreatePostRequest.d.ts.map