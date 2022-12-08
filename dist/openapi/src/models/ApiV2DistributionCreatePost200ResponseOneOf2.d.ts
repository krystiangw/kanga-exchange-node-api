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
 * Invalid quantity
 * @export
 * @interface ApiV2DistributionCreatePost200ResponseOneOf2
 */
export interface ApiV2DistributionCreatePost200ResponseOneOf2 {
    /**
     *
     * @type {string}
     * @memberof ApiV2DistributionCreatePost200ResponseOneOf2
     */
    result: ApiV2DistributionCreatePost200ResponseOneOf2ResultEnum;
    /**
     *
     * @type {number}
     * @memberof ApiV2DistributionCreatePost200ResponseOneOf2
     */
    code: ApiV2DistributionCreatePost200ResponseOneOf2CodeEnum;
}
/**
 * @export
 */
export declare const ApiV2DistributionCreatePost200ResponseOneOf2ResultEnum: {
    readonly Fail: "fail";
};
export type ApiV2DistributionCreatePost200ResponseOneOf2ResultEnum = typeof ApiV2DistributionCreatePost200ResponseOneOf2ResultEnum[keyof typeof ApiV2DistributionCreatePost200ResponseOneOf2ResultEnum];
/**
 * @export
 */
export declare const ApiV2DistributionCreatePost200ResponseOneOf2CodeEnum: {
    readonly NUMBER_9002: 9002;
};
export type ApiV2DistributionCreatePost200ResponseOneOf2CodeEnum = typeof ApiV2DistributionCreatePost200ResponseOneOf2CodeEnum[keyof typeof ApiV2DistributionCreatePost200ResponseOneOf2CodeEnum];
/**
 * Check if a given object implements the ApiV2DistributionCreatePost200ResponseOneOf2 interface.
 */
export declare function instanceOfApiV2DistributionCreatePost200ResponseOneOf2(value: object): boolean;
export declare function ApiV2DistributionCreatePost200ResponseOneOf2FromJSON(json: any): ApiV2DistributionCreatePost200ResponseOneOf2;
export declare function ApiV2DistributionCreatePost200ResponseOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionCreatePost200ResponseOneOf2;
export declare function ApiV2DistributionCreatePost200ResponseOneOf2ToJSON(value?: ApiV2DistributionCreatePost200ResponseOneOf2 | null): any;
//# sourceMappingURL=ApiV2DistributionCreatePost200ResponseOneOf2.d.ts.map