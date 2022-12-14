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
 * Order ID
 * @export
 * @interface ApiV2MarketOrderCreatePost200ResponseOneOf
 */
export interface ApiV2MarketOrderCreatePost200ResponseOneOf {
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketOrderCreatePost200ResponseOneOf
     */
    result: ApiV2MarketOrderCreatePost200ResponseOneOfResultEnum;
    /**
     *
     * @type {string}
     * @memberof ApiV2MarketOrderCreatePost200ResponseOneOf
     */
    orderId: string;
}
/**
 * @export
 */
export declare const ApiV2MarketOrderCreatePost200ResponseOneOfResultEnum: {
    readonly Ok: "ok";
};
export type ApiV2MarketOrderCreatePost200ResponseOneOfResultEnum = typeof ApiV2MarketOrderCreatePost200ResponseOneOfResultEnum[keyof typeof ApiV2MarketOrderCreatePost200ResponseOneOfResultEnum];
/**
 * Check if a given object implements the ApiV2MarketOrderCreatePost200ResponseOneOf interface.
 */
export declare function instanceOfApiV2MarketOrderCreatePost200ResponseOneOf(value: object): boolean;
export declare function ApiV2MarketOrderCreatePost200ResponseOneOfFromJSON(json: any): ApiV2MarketOrderCreatePost200ResponseOneOf;
export declare function ApiV2MarketOrderCreatePost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2MarketOrderCreatePost200ResponseOneOf;
export declare function ApiV2MarketOrderCreatePost200ResponseOneOfToJSON(value?: ApiV2MarketOrderCreatePost200ResponseOneOf | null): any;
//# sourceMappingURL=ApiV2MarketOrderCreatePost200ResponseOneOf.d.ts.map