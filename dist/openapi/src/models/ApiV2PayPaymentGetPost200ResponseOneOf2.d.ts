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
 * Invalid permissions
 * @export
 * @interface ApiV2PayPaymentGetPost200ResponseOneOf2
 */
export interface ApiV2PayPaymentGetPost200ResponseOneOf2 {
    /**
     *
     * @type {string}
     * @memberof ApiV2PayPaymentGetPost200ResponseOneOf2
     */
    result: ApiV2PayPaymentGetPost200ResponseOneOf2ResultEnum;
    /**
     *
     * @type {number}
     * @memberof ApiV2PayPaymentGetPost200ResponseOneOf2
     */
    code: ApiV2PayPaymentGetPost200ResponseOneOf2CodeEnum;
}
/**
 * @export
 */
export declare const ApiV2PayPaymentGetPost200ResponseOneOf2ResultEnum: {
    readonly Fail: "fail";
};
export type ApiV2PayPaymentGetPost200ResponseOneOf2ResultEnum = typeof ApiV2PayPaymentGetPost200ResponseOneOf2ResultEnum[keyof typeof ApiV2PayPaymentGetPost200ResponseOneOf2ResultEnum];
/**
 * @export
 */
export declare const ApiV2PayPaymentGetPost200ResponseOneOf2CodeEnum: {
    readonly NUMBER_403: 403;
};
export type ApiV2PayPaymentGetPost200ResponseOneOf2CodeEnum = typeof ApiV2PayPaymentGetPost200ResponseOneOf2CodeEnum[keyof typeof ApiV2PayPaymentGetPost200ResponseOneOf2CodeEnum];
/**
 * Check if a given object implements the ApiV2PayPaymentGetPost200ResponseOneOf2 interface.
 */
export declare function instanceOfApiV2PayPaymentGetPost200ResponseOneOf2(value: object): boolean;
export declare function ApiV2PayPaymentGetPost200ResponseOneOf2FromJSON(json: any): ApiV2PayPaymentGetPost200ResponseOneOf2;
export declare function ApiV2PayPaymentGetPost200ResponseOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayPaymentGetPost200ResponseOneOf2;
export declare function ApiV2PayPaymentGetPost200ResponseOneOf2ToJSON(value?: ApiV2PayPaymentGetPost200ResponseOneOf2 | null): any;
//# sourceMappingURL=ApiV2PayPaymentGetPost200ResponseOneOf2.d.ts.map