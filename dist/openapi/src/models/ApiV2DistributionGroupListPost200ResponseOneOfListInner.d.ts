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
 * @interface ApiV2DistributionGroupListPost200ResponseOneOfListInner
 */
export interface ApiV2DistributionGroupListPost200ResponseOneOfListInner {
    /**
     *
     * @type {string}
     * @memberof ApiV2DistributionGroupListPost200ResponseOneOfListInner
     */
    groupId: string;
    /**
     *
     * @type {string}
     * @memberof ApiV2DistributionGroupListPost200ResponseOneOfListInner
     */
    groupName: string;
}
/**
 * Check if a given object implements the ApiV2DistributionGroupListPost200ResponseOneOfListInner interface.
 */
export declare function instanceOfApiV2DistributionGroupListPost200ResponseOneOfListInner(value: object): boolean;
export declare function ApiV2DistributionGroupListPost200ResponseOneOfListInnerFromJSON(json: any): ApiV2DistributionGroupListPost200ResponseOneOfListInner;
export declare function ApiV2DistributionGroupListPost200ResponseOneOfListInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionGroupListPost200ResponseOneOfListInner;
export declare function ApiV2DistributionGroupListPost200ResponseOneOfListInnerToJSON(value?: ApiV2DistributionGroupListPost200ResponseOneOfListInner | null): any;
//# sourceMappingURL=ApiV2DistributionGroupListPost200ResponseOneOfListInner.d.ts.map