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
 * @interface ApiV2PayCurrenciesListGet200ResponseListInner
 */
export interface ApiV2PayCurrenciesListGet200ResponseListInner {
    /**
     *
     * @type {string}
     * @memberof ApiV2PayCurrenciesListGet200ResponseListInner
     */
    currency: string;
    /**
     *
     * @type {object}
     * @memberof ApiV2PayCurrenciesListGet200ResponseListInner
     */
    connectedCurrencies: object;
}
/**
 * Check if a given object implements the ApiV2PayCurrenciesListGet200ResponseListInner interface.
 */
export declare function instanceOfApiV2PayCurrenciesListGet200ResponseListInner(value: object): boolean;
export declare function ApiV2PayCurrenciesListGet200ResponseListInnerFromJSON(json: any): ApiV2PayCurrenciesListGet200ResponseListInner;
export declare function ApiV2PayCurrenciesListGet200ResponseListInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2PayCurrenciesListGet200ResponseListInner;
export declare function ApiV2PayCurrenciesListGet200ResponseListInnerToJSON(value?: ApiV2PayCurrenciesListGet200ResponseListInner | null): any;
//# sourceMappingURL=ApiV2PayCurrenciesListGet200ResponseListInner.d.ts.map