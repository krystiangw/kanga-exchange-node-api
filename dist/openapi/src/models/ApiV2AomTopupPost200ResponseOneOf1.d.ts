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
 * Invalid amount
 * @export
 * @interface ApiV2AomTopupPost200ResponseOneOf1
 */
export interface ApiV2AomTopupPost200ResponseOneOf1 {
    /**
     *
     * @type {string}
     * @memberof ApiV2AomTopupPost200ResponseOneOf1
     */
    result: ApiV2AomTopupPost200ResponseOneOf1ResultEnum;
    /**
     *
     * @type {number}
     * @memberof ApiV2AomTopupPost200ResponseOneOf1
     */
    code: ApiV2AomTopupPost200ResponseOneOf1CodeEnum;
}
/**
 * @export
 */
export declare const ApiV2AomTopupPost200ResponseOneOf1ResultEnum: {
    readonly Fail: "fail";
};
export type ApiV2AomTopupPost200ResponseOneOf1ResultEnum = typeof ApiV2AomTopupPost200ResponseOneOf1ResultEnum[keyof typeof ApiV2AomTopupPost200ResponseOneOf1ResultEnum];
/**
 * @export
 */
export declare const ApiV2AomTopupPost200ResponseOneOf1CodeEnum: {
    readonly NUMBER_9000: 9000;
};
export type ApiV2AomTopupPost200ResponseOneOf1CodeEnum = typeof ApiV2AomTopupPost200ResponseOneOf1CodeEnum[keyof typeof ApiV2AomTopupPost200ResponseOneOf1CodeEnum];
/**
 * Check if a given object implements the ApiV2AomTopupPost200ResponseOneOf1 interface.
 */
export declare function instanceOfApiV2AomTopupPost200ResponseOneOf1(value: object): boolean;
export declare function ApiV2AomTopupPost200ResponseOneOf1FromJSON(json: any): ApiV2AomTopupPost200ResponseOneOf1;
export declare function ApiV2AomTopupPost200ResponseOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomTopupPost200ResponseOneOf1;
export declare function ApiV2AomTopupPost200ResponseOneOf1ToJSON(value?: ApiV2AomTopupPost200ResponseOneOf1 | null): any;
//# sourceMappingURL=ApiV2AomTopupPost200ResponseOneOf1.d.ts.map