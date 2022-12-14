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
 * PaymentId not unique
 * @export
 * @interface ApiV2PayPaymentCreatePost200ResponseOneOf5
 */
export interface ApiV2PayPaymentCreatePost200ResponseOneOf5 {
    /**
     *
     * @type {string}
     * @memberof ApiV2PayPaymentCreatePost200ResponseOneOf5
     */
    result: ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum;
    /**
     *
     * @type {number}
     * @memberof ApiV2PayPaymentCreatePost200ResponseOneOf5
     */
    code: ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum;
}
/**
 * @export
 */
export declare const ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum: {
    readonly Fail: "fail";
};
export type ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum = typeof ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum[keyof typeof ApiV2PayPaymentCreatePost200ResponseOneOf5ResultEnum];
/**
 * @export
 */
export declare const ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum: {
    readonly NUMBER_9005: 9005;
};
export type ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum = typeof ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum[keyof typeof ApiV2PayPaymentCreatePost200ResponseOneOf5CodeEnum];
/**
 * Check if a given object implements the ApiV2PayPaymentCreatePost200ResponseOneOf5 interface.
 */
export declare function instanceOfApiV2PayPaymentCreatePost200ResponseOneOf5(value: object): boolean;
export declare function ApiV2PayPaymentCreatePost200ResponseOneOf5FromJSON(json: any): ApiV2PayPaymentCreatePost200ResponseOneOf5;
export declare function ApiV2PayPaymentCreatePost200ResponseOneOf5FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayPaymentCreatePost200ResponseOneOf5;
export declare function ApiV2PayPaymentCreatePost200ResponseOneOf5ToJSON(value?: ApiV2PayPaymentCreatePost200ResponseOneOf5 | null): any;
//# sourceMappingURL=ApiV2PayPaymentCreatePost200ResponseOneOf5.d.ts.map