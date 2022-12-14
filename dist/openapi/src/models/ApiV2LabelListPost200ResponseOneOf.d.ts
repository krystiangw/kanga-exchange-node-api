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
import type { ApiV2LabelListPost200ResponseOneOfListInner } from './ApiV2LabelListPost200ResponseOneOfListInner';
/**
 *
 * @export
 * @interface ApiV2LabelListPost200ResponseOneOf
 */
export interface ApiV2LabelListPost200ResponseOneOf {
    /**
     *
     * @type {string}
     * @memberof ApiV2LabelListPost200ResponseOneOf
     */
    result: ApiV2LabelListPost200ResponseOneOfResultEnum;
    /**
     *
     * @type {Array<ApiV2LabelListPost200ResponseOneOfListInner>}
     * @memberof ApiV2LabelListPost200ResponseOneOf
     */
    list: Array<ApiV2LabelListPost200ResponseOneOfListInner>;
}
/**
 * @export
 */
export declare const ApiV2LabelListPost200ResponseOneOfResultEnum: {
    readonly Ok: "ok";
};
export type ApiV2LabelListPost200ResponseOneOfResultEnum = typeof ApiV2LabelListPost200ResponseOneOfResultEnum[keyof typeof ApiV2LabelListPost200ResponseOneOfResultEnum];
/**
 * Check if a given object implements the ApiV2LabelListPost200ResponseOneOf interface.
 */
export declare function instanceOfApiV2LabelListPost200ResponseOneOf(value: object): boolean;
export declare function ApiV2LabelListPost200ResponseOneOfFromJSON(json: any): ApiV2LabelListPost200ResponseOneOf;
export declare function ApiV2LabelListPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2LabelListPost200ResponseOneOf;
export declare function ApiV2LabelListPost200ResponseOneOfToJSON(value?: ApiV2LabelListPost200ResponseOneOf | null): any;
//# sourceMappingURL=ApiV2LabelListPost200ResponseOneOf.d.ts.map