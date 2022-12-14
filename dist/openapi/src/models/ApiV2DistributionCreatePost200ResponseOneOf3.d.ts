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
 * Quantity precision beyond currency precision limit
 * @export
 * @interface ApiV2DistributionCreatePost200ResponseOneOf3
 */
export interface ApiV2DistributionCreatePost200ResponseOneOf3 {
    /**
     *
     * @type {string}
     * @memberof ApiV2DistributionCreatePost200ResponseOneOf3
     */
    result: ApiV2DistributionCreatePost200ResponseOneOf3ResultEnum;
    /**
     *
     * @type {number}
     * @memberof ApiV2DistributionCreatePost200ResponseOneOf3
     */
    code: ApiV2DistributionCreatePost200ResponseOneOf3CodeEnum;
}
/**
 * @export
 */
export declare const ApiV2DistributionCreatePost200ResponseOneOf3ResultEnum: {
    readonly Fail: "fail";
};
export type ApiV2DistributionCreatePost200ResponseOneOf3ResultEnum = typeof ApiV2DistributionCreatePost200ResponseOneOf3ResultEnum[keyof typeof ApiV2DistributionCreatePost200ResponseOneOf3ResultEnum];
/**
 * @export
 */
export declare const ApiV2DistributionCreatePost200ResponseOneOf3CodeEnum: {
    readonly NUMBER_9003: 9003;
};
export type ApiV2DistributionCreatePost200ResponseOneOf3CodeEnum = typeof ApiV2DistributionCreatePost200ResponseOneOf3CodeEnum[keyof typeof ApiV2DistributionCreatePost200ResponseOneOf3CodeEnum];
/**
 * Check if a given object implements the ApiV2DistributionCreatePost200ResponseOneOf3 interface.
 */
export declare function instanceOfApiV2DistributionCreatePost200ResponseOneOf3(value: object): boolean;
export declare function ApiV2DistributionCreatePost200ResponseOneOf3FromJSON(json: any): ApiV2DistributionCreatePost200ResponseOneOf3;
export declare function ApiV2DistributionCreatePost200ResponseOneOf3FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2DistributionCreatePost200ResponseOneOf3;
export declare function ApiV2DistributionCreatePost200ResponseOneOf3ToJSON(value?: ApiV2DistributionCreatePost200ResponseOneOf3 | null): any;
//# sourceMappingURL=ApiV2DistributionCreatePost200ResponseOneOf3.d.ts.map