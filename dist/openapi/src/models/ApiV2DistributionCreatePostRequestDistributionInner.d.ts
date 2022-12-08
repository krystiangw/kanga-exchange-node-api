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
 * @interface ApiV2DistributionCreatePostRequestDistributionInner
 */
export interface ApiV2DistributionCreatePostRequestDistributionInner {
    /**
     * App user ID.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequestDistributionInner
     */
    appUserId: string;
    /**
     * Quantity of tokens.
     * @type {string}
     * @memberof ApiV2DistributionCreatePostRequestDistributionInner
     */
    quantity: string;
}
/**
 * Check if a given object implements the ApiV2DistributionCreatePostRequestDistributionInner interface.
 */
export declare function instanceOfApiV2DistributionCreatePostRequestDistributionInner(value: object): boolean;
export declare function ApiV2DistributionCreatePostRequestDistributionInnerFromJSON(json: any): ApiV2DistributionCreatePostRequestDistributionInner;
export declare function ApiV2DistributionCreatePostRequestDistributionInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionCreatePostRequestDistributionInner;
export declare function ApiV2DistributionCreatePostRequestDistributionInnerToJSON(value?: ApiV2DistributionCreatePostRequestDistributionInner | null): any;
//# sourceMappingURL=ApiV2DistributionCreatePostRequestDistributionInner.d.ts.map