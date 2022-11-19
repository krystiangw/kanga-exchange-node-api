/* tslint:disable */
/* eslint-disable */
/**
 * Kanga.exchange API
 * This is API generated from kanga.exchange code.
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
  ApiAdminMarketTickerAddPost200Response,
  ApiAdminMarketTickerAddPostRequest,
  ApiAdminMarketTickerRemovePost200Response,
  ApiAdminMarketTickerRemovePostRequest,
  ApiMarketChangesListPost200Response,
  ApiMarketTickerListPost200Response,
} from '../models';
import {
    ApiAdminMarketTickerAddPost200ResponseFromJSON,
    ApiAdminMarketTickerAddPost200ResponseToJSON,
    ApiAdminMarketTickerAddPostRequestFromJSON,
    ApiAdminMarketTickerAddPostRequestToJSON,
    ApiAdminMarketTickerRemovePost200ResponseFromJSON,
    ApiAdminMarketTickerRemovePost200ResponseToJSON,
    ApiAdminMarketTickerRemovePostRequestFromJSON,
    ApiAdminMarketTickerRemovePostRequestToJSON,
    ApiMarketChangesListPost200ResponseFromJSON,
    ApiMarketChangesListPost200ResponseToJSON,
    ApiMarketTickerListPost200ResponseFromJSON,
    ApiMarketTickerListPost200ResponseToJSON,
} from '../models';

export interface ApiAdminMarketTickerAddPostOperationRequest {
    apiAdminMarketTickerAddPostRequest: ApiAdminMarketTickerAddPostRequest;
}

export interface ApiAdminMarketTickerRemovePostOperationRequest {
    apiAdminMarketTickerRemovePostRequest: ApiAdminMarketTickerRemovePostRequest;
}

export interface ApiMarketChangesListPostRequest {
    body: any | null;
}

export interface ApiMarketTickerListPostRequest {
    body: any | null;
}

/**
 * 
 */
export class MarketApi extends runtime.BaseAPI {

    /**
     * Saves market for future price monitoring and ticker list in mobile app.
     * Add market as a ticker
     */
    async apiAdminMarketTickerAddPostRaw(requestParameters: ApiAdminMarketTickerAddPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiAdminMarketTickerAddPost200Response>> {
        if (requestParameters.apiAdminMarketTickerAddPostRequest === null || requestParameters.apiAdminMarketTickerAddPostRequest === undefined) {
            throw new runtime.RequiredError('apiAdminMarketTickerAddPostRequest','Required parameter requestParameters.apiAdminMarketTickerAddPostRequest was null or undefined when calling apiAdminMarketTickerAddPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["auth"] = this.configuration.apiKey("auth"); // AdminAuth authentication
        }

        const response = await this.request({
            path: `/api/admin/market/ticker/add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiAdminMarketTickerAddPostRequestToJSON(requestParameters.apiAdminMarketTickerAddPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiAdminMarketTickerAddPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Saves market for future price monitoring and ticker list in mobile app.
     * Add market as a ticker
     */
    async apiAdminMarketTickerAddPost(requestParameters: ApiAdminMarketTickerAddPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiAdminMarketTickerAddPost200Response> {
        const response = await this.apiAdminMarketTickerAddPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reoves market from defined ticker list.
     * Remove ticker
     */
    async apiAdminMarketTickerRemovePostRaw(requestParameters: ApiAdminMarketTickerRemovePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiAdminMarketTickerRemovePost200Response>> {
        if (requestParameters.apiAdminMarketTickerRemovePostRequest === null || requestParameters.apiAdminMarketTickerRemovePostRequest === undefined) {
            throw new runtime.RequiredError('apiAdminMarketTickerRemovePostRequest','Required parameter requestParameters.apiAdminMarketTickerRemovePostRequest was null or undefined when calling apiAdminMarketTickerRemovePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["auth"] = this.configuration.apiKey("auth"); // AdminAuth authentication
        }

        const response = await this.request({
            path: `/api/admin/market/ticker/remove`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiAdminMarketTickerRemovePostRequestToJSON(requestParameters.apiAdminMarketTickerRemovePostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiAdminMarketTickerRemovePost200ResponseFromJSON(jsonValue));
    }

    /**
     * Reoves market from defined ticker list.
     * Remove ticker
     */
    async apiAdminMarketTickerRemovePost(requestParameters: ApiAdminMarketTickerRemovePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiAdminMarketTickerRemovePost200Response> {
        const response = await this.apiAdminMarketTickerRemovePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns changes on markets that are incremented periodically in cache.
     * Returns market changes.
     */
    async apiMarketChangesListPostRaw(requestParameters: ApiMarketChangesListPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMarketChangesListPost200Response>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling apiMarketChangesListPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/market/changes/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMarketChangesListPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns changes on markets that are incremented periodically in cache.
     * Returns market changes.
     */
    async apiMarketChangesListPost(requestParameters: ApiMarketChangesListPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMarketChangesListPost200Response> {
        const response = await this.apiMarketChangesListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of market tickers defined.
     * Market tickers list
     */
    async apiMarketTickerListPostRaw(requestParameters: ApiMarketTickerListPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiMarketTickerListPost200Response>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling apiMarketTickerListPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/market/ticker/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiMarketTickerListPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of market tickers defined.
     * Market tickers list
     */
    async apiMarketTickerListPost(requestParameters: ApiMarketTickerListPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiMarketTickerListPost200Response> {
        const response = await this.apiMarketTickerListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
