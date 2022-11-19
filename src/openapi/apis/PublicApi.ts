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
import type {
  ApiV2MarketChangesGet200Response,
  ApiV2MarketDepthGet200Response,
  ApiV2MarketOrderbookRawGet200Response,
  ApiV2MarketTradesGet200Response,
} from '../models';
import {
    ApiV2MarketChangesGet200ResponseFromJSON,
    ApiV2MarketChangesGet200ResponseToJSON,
    ApiV2MarketDepthGet200ResponseFromJSON,
    ApiV2MarketDepthGet200ResponseToJSON,
    ApiV2MarketOrderbookRawGet200ResponseFromJSON,
    ApiV2MarketOrderbookRawGet200ResponseToJSON,
    ApiV2MarketTradesGet200ResponseFromJSON,
    ApiV2MarketTradesGet200ResponseToJSON,
} from '../models';

export interface ApiV2MarketChangesGetRequest {
    market: string;
}

export interface ApiV2MarketDepthGetRequest {
    market: string;
}

export interface ApiV2MarketOrderbookRawGetRequest {
    market: string;
}

export interface ApiV2MarketTradesGetRequest {
    market: string;
}

/**
 *
 */
export class PublicApi extends runtime.BaseAPI {

    /**
     * Returns the list of assets accepted by the exchange.
     * Asset list
     */
    async apiV2MarketAssetsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/market/assets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Returns the list of assets accepted by the exchange.
     * Asset list
     */
    async apiV2MarketAssetsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.apiV2MarketAssetsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns raw change data for the specified market.
     * Market changes
     */
    async apiV2MarketChangesGetRaw(requestParameters: ApiV2MarketChangesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2MarketChangesGet200Response>> {
        if (requestParameters.market === null || requestParameters.market === undefined) {
            throw new runtime.RequiredError('market','Required parameter requestParameters.market was null or undefined when calling apiV2MarketChangesGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.market !== undefined) {
            queryParameters['market'] = requestParameters.market;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/market/changes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2MarketChangesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns raw change data for the specified market.
     * Market changes
     */
    async apiV2MarketChangesGet(requestParameters: ApiV2MarketChangesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2MarketChangesGet200Response> {
        const response = await this.apiV2MarketChangesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the order book for the specified market.
     * Order book
     */
    async apiV2MarketDepthGetRaw(requestParameters: ApiV2MarketDepthGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2MarketDepthGet200Response>> {
        if (requestParameters.market === null || requestParameters.market === undefined) {
            throw new runtime.RequiredError('market','Required parameter requestParameters.market was null or undefined when calling apiV2MarketDepthGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.market !== undefined) {
            queryParameters['market'] = requestParameters.market;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/market/depth`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2MarketDepthGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns the order book for the specified market.
     * Order book
     */
    async apiV2MarketDepthGet(requestParameters: ApiV2MarketDepthGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2MarketDepthGet200Response> {
        const response = await this.apiV2MarketDepthGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns raw order book data for the specified market.
     * Order book (raw)
     */
    async apiV2MarketOrderbookRawGetRaw(requestParameters: ApiV2MarketOrderbookRawGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2MarketOrderbookRawGet200Response>> {
        if (requestParameters.market === null || requestParameters.market === undefined) {
            throw new runtime.RequiredError('market','Required parameter requestParameters.market was null or undefined when calling apiV2MarketOrderbookRawGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.market !== undefined) {
            queryParameters['market'] = requestParameters.market;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/market/orderbook/raw`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2MarketOrderbookRawGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns raw order book data for the specified market.
     * Order book (raw)
     */
    async apiV2MarketOrderbookRawGet(requestParameters: ApiV2MarketOrderbookRawGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2MarketOrderbookRawGet200Response> {
        const response = await this.apiV2MarketOrderbookRawGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns last price and 24-hour change for all active markets.
     * Market tickers
     */
    async apiV2MarketTickerGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/market/ticker`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Returns last price and 24-hour change for all active markets.
     * Market tickers
     */
    async apiV2MarketTickerGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.apiV2MarketTickerGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns the list of trades for the specified market.
     * Market trades
     */
    async apiV2MarketTradesGetRaw(requestParameters: ApiV2MarketTradesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2MarketTradesGet200Response>> {
        if (requestParameters.market === null || requestParameters.market === undefined) {
            throw new runtime.RequiredError('market','Required parameter requestParameters.market was null or undefined when calling apiV2MarketTradesGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.market !== undefined) {
            queryParameters['market'] = requestParameters.market;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/market/trades`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2MarketTradesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns the list of trades for the specified market.
     * Market trades
     */
    async apiV2MarketTradesGet(requestParameters: ApiV2MarketTradesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2MarketTradesGet200Response> {
        const response = await this.apiV2MarketTradesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
