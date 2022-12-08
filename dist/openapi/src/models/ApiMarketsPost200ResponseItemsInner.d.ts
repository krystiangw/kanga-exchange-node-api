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
 * @interface ApiMarketsPost200ResponseItemsInner
 */
export interface ApiMarketsPost200ResponseItemsInner {
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    buyingCurrency: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    payingCurrency: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    minAmount: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    type: string;
    /**
     *
     * @type {boolean}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    mainMarket: boolean;
    /**
     *
     * @type {number}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    pricePrecision: number;
    /**
     *
     * @type {number}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    index: number;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    available?: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    opening?: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    ecoOpening?: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    lastPrice?: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    change?: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    volume?: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    bidsAvailableSince: string;
    /**
     *
     * @type {string}
     * @memberof ApiMarketsPost200ResponseItemsInner
     */
    asksAvailableSince: string;
}
/**
 * Check if a given object implements the ApiMarketsPost200ResponseItemsInner interface.
 */
export declare function instanceOfApiMarketsPost200ResponseItemsInner(value: object): boolean;
export declare function ApiMarketsPost200ResponseItemsInnerFromJSON(json: any): ApiMarketsPost200ResponseItemsInner;
export declare function ApiMarketsPost200ResponseItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiMarketsPost200ResponseItemsInner;
export declare function ApiMarketsPost200ResponseItemsInnerToJSON(value?: ApiMarketsPost200ResponseItemsInner | null): any;
//# sourceMappingURL=ApiMarketsPost200ResponseItemsInner.d.ts.map