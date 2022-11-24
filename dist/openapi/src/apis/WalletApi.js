/* tslint:disable */
/* eslint-disable */
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
import * as runtime from '../runtime';
import { ApiV2WalletListPost200ResponseFromJSON, ApiV2WalletListPostRequestToJSON, } from '../models';
/**
 *
 */
export class WalletApi extends runtime.BaseAPI {
    /**
     * Returns wallet balances for all assets held by the user.
     * Wallet balances
     */
    async apiV2WalletListPostRaw(requestParameters, initOverrides) {
        if (requestParameters.apiV2WalletListPostRequest === null || requestParameters.apiV2WalletListPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2WalletListPostRequest', 'Required parameter requestParameters.apiV2WalletListPostRequest was null or undefined when calling apiV2WalletListPost.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }
        const response = await this.request({
            path: `/api/v2/wallet/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV2WalletListPostRequestToJSON(requestParameters.apiV2WalletListPostRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2WalletListPost200ResponseFromJSON(jsonValue));
    }
    /**
     * Returns wallet balances for all assets held by the user.
     * Wallet balances
     */
    async apiV2WalletListPost(requestParameters, initOverrides) {
        const response = await this.apiV2WalletListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
//# sourceMappingURL=WalletApi.js.map