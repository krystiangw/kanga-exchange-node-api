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
 * @interface ApiV2AomCreatePost200ResponseOneOf
 */
export interface ApiV2AomCreatePost200ResponseOneOf {
    /**
     *
     * @type {string}
     * @memberof ApiV2AomCreatePost200ResponseOneOf
     */
    result: ApiV2AomCreatePost200ResponseOneOfResultEnum;
    /**
     *
     * @type {string}
     * @memberof ApiV2AomCreatePost200ResponseOneOf
     */
    aomId: string;
}
/**
 * @export
 */
export declare const ApiV2AomCreatePost200ResponseOneOfResultEnum: {
    readonly Ok: "ok";
};
export type ApiV2AomCreatePost200ResponseOneOfResultEnum = typeof ApiV2AomCreatePost200ResponseOneOfResultEnum[keyof typeof ApiV2AomCreatePost200ResponseOneOfResultEnum];
/**
 * Check if a given object implements the ApiV2AomCreatePost200ResponseOneOf interface.
 */
export declare function instanceOfApiV2AomCreatePost200ResponseOneOf(value: object): boolean;
export declare function ApiV2AomCreatePost200ResponseOneOfFromJSON(json: any): ApiV2AomCreatePost200ResponseOneOf;
export declare function ApiV2AomCreatePost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomCreatePost200ResponseOneOf;
export declare function ApiV2AomCreatePost200ResponseOneOfToJSON(value?: ApiV2AomCreatePost200ResponseOneOf | null): any;
//# sourceMappingURL=ApiV2AomCreatePost200ResponseOneOf.d.ts.map