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
import type { ApiV2WalletListPost200ResponseOneOfWalletsInner } from './ApiV2WalletListPost200ResponseOneOfWalletsInner';
/**
 *
 * @export
 * @interface ApiV2WalletListPost200ResponseOneOf
 */
export interface ApiV2WalletListPost200ResponseOneOf {
    /**
     *
     * @type {string}
     * @memberof ApiV2WalletListPost200ResponseOneOf
     */
    result: ApiV2WalletListPost200ResponseOneOfResultEnum;
    /**
     *
     * @type {Array<ApiV2WalletListPost200ResponseOneOfWalletsInner>}
     * @memberof ApiV2WalletListPost200ResponseOneOf
     */
    wallets: Array<ApiV2WalletListPost200ResponseOneOfWalletsInner>;
}
/**
 * @export
 */
export declare const ApiV2WalletListPost200ResponseOneOfResultEnum: {
    readonly Ok: "ok";
};
export type ApiV2WalletListPost200ResponseOneOfResultEnum = typeof ApiV2WalletListPost200ResponseOneOfResultEnum[keyof typeof ApiV2WalletListPost200ResponseOneOfResultEnum];
/**
 * Check if a given object implements the ApiV2WalletListPost200ResponseOneOf interface.
 */
export declare function instanceOfApiV2WalletListPost200ResponseOneOf(value: object): boolean;
export declare function ApiV2WalletListPost200ResponseOneOfFromJSON(json: any): ApiV2WalletListPost200ResponseOneOf;
export declare function ApiV2WalletListPost200ResponseOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2WalletListPost200ResponseOneOf;
export declare function ApiV2WalletListPost200ResponseOneOfToJSON(value?: ApiV2WalletListPost200ResponseOneOf | null): any;
//# sourceMappingURL=ApiV2WalletListPost200ResponseOneOf.d.ts.map