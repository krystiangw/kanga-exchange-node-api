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
  ApiV2DistributionCreatePost200Response,
  ApiV2DistributionCreatePostRequest,
  ApiV2DistributionGroupListPost200Response,
  ApiV2LabelListPostRequest,
} from '../models';
import {
    ApiV2DistributionCreatePost200ResponseFromJSON,
    ApiV2DistributionCreatePost200ResponseToJSON,
    ApiV2DistributionCreatePostRequestFromJSON,
    ApiV2DistributionCreatePostRequestToJSON,
    ApiV2DistributionGroupListPost200ResponseFromJSON,
    ApiV2DistributionGroupListPost200ResponseToJSON,
    ApiV2LabelListPostRequestFromJSON,
    ApiV2LabelListPostRequestToJSON,
} from '../models';

export interface ApiV2DistributionCreatePostOperationRequest {
    apiV2DistributionCreatePostRequest: ApiV2DistributionCreatePostRequest;
}

export interface ApiV2DistributionGroupListPostRequest {
    apiV2LabelListPostRequest: ApiV2LabelListPostRequest;
}

/**
 * DistributionApi - interface
 * 
 * @export
 * @interface DistributionApiInterface
 */
export interface DistributionApiInterface {
    /**
     * Creates a distribution
     * @summary Distribution create
     * @param {ApiV2DistributionCreatePostRequest} apiV2DistributionCreatePostRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DistributionApiInterface
     */
    apiV2DistributionCreatePostRaw(requestParameters: ApiV2DistributionCreatePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2DistributionCreatePost200Response>>;

    /**
     * Creates a distribution
     * Distribution create
     */
    apiV2DistributionCreatePost(requestParameters: ApiV2DistributionCreatePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2DistributionCreatePost200Response>;

    /**
     * Lists distribution groups
     * @summary Distribution group list
     * @param {ApiV2LabelListPostRequest} apiV2LabelListPostRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DistributionApiInterface
     */
    apiV2DistributionGroupListPostRaw(requestParameters: ApiV2DistributionGroupListPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2DistributionGroupListPost200Response>>;

    /**
     * Lists distribution groups
     * Distribution group list
     */
    apiV2DistributionGroupListPost(requestParameters: ApiV2DistributionGroupListPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2DistributionGroupListPost200Response>;

}

/**
 * 
 */
export class DistributionApi extends runtime.BaseAPI implements DistributionApiInterface {

    /**
     * Creates a distribution
     * Distribution create
     */
    async apiV2DistributionCreatePostRaw(requestParameters: ApiV2DistributionCreatePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2DistributionCreatePost200Response>> {
        if (requestParameters.apiV2DistributionCreatePostRequest === null || requestParameters.apiV2DistributionCreatePostRequest === undefined) {
            throw new runtime.RequiredError('apiV2DistributionCreatePostRequest','Required parameter requestParameters.apiV2DistributionCreatePostRequest was null or undefined when calling apiV2DistributionCreatePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }

        const response = await this.request({
            path: `/api/v2/distribution/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV2DistributionCreatePostRequestToJSON(requestParameters.apiV2DistributionCreatePostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2DistributionCreatePost200ResponseFromJSON(jsonValue));
    }

    /**
     * Creates a distribution
     * Distribution create
     */
    async apiV2DistributionCreatePost(requestParameters: ApiV2DistributionCreatePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2DistributionCreatePost200Response> {
        const response = await this.apiV2DistributionCreatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists distribution groups
     * Distribution group list
     */
    async apiV2DistributionGroupListPostRaw(requestParameters: ApiV2DistributionGroupListPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2DistributionGroupListPost200Response>> {
        if (requestParameters.apiV2LabelListPostRequest === null || requestParameters.apiV2LabelListPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelListPostRequest','Required parameter requestParameters.apiV2LabelListPostRequest was null or undefined when calling apiV2DistributionGroupListPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }

        const response = await this.request({
            path: `/api/v2/distribution/group/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV2LabelListPostRequestToJSON(requestParameters.apiV2LabelListPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2DistributionGroupListPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Lists distribution groups
     * Distribution group list
     */
    async apiV2DistributionGroupListPost(requestParameters: ApiV2DistributionGroupListPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2DistributionGroupListPost200Response> {
        const response = await this.apiV2DistributionGroupListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
