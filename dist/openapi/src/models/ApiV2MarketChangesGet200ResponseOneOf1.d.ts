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
 * @interface ApiV2MarketChangesGet200ResponseOneOf1
 */
export interface ApiV2MarketChangesGet200ResponseOneOf1 {
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketChangesGet200ResponseOneOf1
     */
    result: ApiV2MarketChangesGet200ResponseOneOf1ResultEnum;
}
/**
 * @export
 */
export declare const ApiV2MarketChangesGet200ResponseOneOf1ResultEnum: {
    readonly Fail: "fail";
};
export type ApiV2MarketChangesGet200ResponseOneOf1ResultEnum = typeof ApiV2MarketChangesGet200ResponseOneOf1ResultEnum[keyof typeof ApiV2MarketChangesGet200ResponseOneOf1ResultEnum];
/**
 * Check if a given object implements the ApiV2MarketChangesGet200ResponseOneOf1 interface.
 */
export declare function instanceOfApiV2MarketChangesGet200ResponseOneOf1(value: object): boolean;
export declare function ApiV2MarketChangesGet200ResponseOneOf1FromJSON(json: any): ApiV2MarketChangesGet200ResponseOneOf1;
export declare function ApiV2MarketChangesGet200ResponseOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketChangesGet200ResponseOneOf1;
export declare function ApiV2MarketChangesGet200ResponseOneOf1ToJSON(value?: ApiV2MarketChangesGet200ResponseOneOf1 | null): any;
//# sourceMappingURL=ApiV2MarketChangesGet200ResponseOneOf1.d.ts.map