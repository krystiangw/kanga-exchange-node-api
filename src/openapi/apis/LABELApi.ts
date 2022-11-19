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
  ApiV2LabelAssignPost200Response,
  ApiV2LabelListPost200Response,
  ApiV2LabelListPostRequest,
  ApiV2LabelUnassignPost200Response,
  ApiV2LabelUnassignPostRequest,
  ApiV2LabelUserListPost200Response,
  ApiV2LabelUserListPostRequest,
} from '../models';
import {
    ApiV2LabelAssignPost200ResponseFromJSON,
    ApiV2LabelAssignPost200ResponseToJSON,
    ApiV2LabelListPost200ResponseFromJSON,
    ApiV2LabelListPost200ResponseToJSON,
    ApiV2LabelListPostRequestFromJSON,
    ApiV2LabelListPostRequestToJSON,
    ApiV2LabelUnassignPost200ResponseFromJSON,
    ApiV2LabelUnassignPost200ResponseToJSON,
    ApiV2LabelUnassignPostRequestFromJSON,
    ApiV2LabelUnassignPostRequestToJSON,
    ApiV2LabelUserListPost200ResponseFromJSON,
    ApiV2LabelUserListPost200ResponseToJSON,
    ApiV2LabelUserListPostRequestFromJSON,
    ApiV2LabelUserListPostRequestToJSON,
} from '../models';

export interface ApiV2LabelAssignPostRequest {
    apiV2LabelUnassignPostRequest: ApiV2LabelUnassignPostRequest;
}

export interface ApiV2LabelListPostOperationRequest {
    apiV2LabelListPostRequest: ApiV2LabelListPostRequest;
}

export interface ApiV2LabelUnassignPostOperationRequest {
    apiV2LabelUnassignPostRequest: ApiV2LabelUnassignPostRequest;
}

export interface ApiV2LabelUserListPostOperationRequest {
    apiV2LabelUserListPostRequest: ApiV2LabelUserListPostRequest;
}

/**
 * 
 */
export class LABELApi extends runtime.BaseAPI {

    /**
     * Assigns a label to the specified user.
     * Assign a label
     */
    async apiV2LabelAssignPostRaw(requestParameters: ApiV2LabelAssignPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2LabelAssignPost200Response>> {
        if (requestParameters.apiV2LabelUnassignPostRequest === null || requestParameters.apiV2LabelUnassignPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelUnassignPostRequest','Required parameter requestParameters.apiV2LabelUnassignPostRequest was null or undefined when calling apiV2LabelAssignPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }

        const response = await this.request({
            path: `/api/v2/label/assign`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV2LabelUnassignPostRequestToJSON(requestParameters.apiV2LabelUnassignPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2LabelAssignPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Assigns a label to the specified user.
     * Assign a label
     */
    async apiV2LabelAssignPost(requestParameters: ApiV2LabelAssignPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2LabelAssignPost200Response> {
        const response = await this.apiV2LabelAssignPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the list of available labels.
     * Label list
     */
    async apiV2LabelListPostRaw(requestParameters: ApiV2LabelListPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2LabelListPost200Response>> {
        if (requestParameters.apiV2LabelListPostRequest === null || requestParameters.apiV2LabelListPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelListPostRequest','Required parameter requestParameters.apiV2LabelListPostRequest was null or undefined when calling apiV2LabelListPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }

        const response = await this.request({
            path: `/api/v2/label/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV2LabelListPostRequestToJSON(requestParameters.apiV2LabelListPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2LabelListPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns the list of available labels.
     * Label list
     */
    async apiV2LabelListPost(requestParameters: ApiV2LabelListPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2LabelListPost200Response> {
        const response = await this.apiV2LabelListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unassigns a label from the specified user.
     * Unassign a label
     */
    async apiV2LabelUnassignPostRaw(requestParameters: ApiV2LabelUnassignPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2LabelUnassignPost200Response>> {
        if (requestParameters.apiV2LabelUnassignPostRequest === null || requestParameters.apiV2LabelUnassignPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelUnassignPostRequest','Required parameter requestParameters.apiV2LabelUnassignPostRequest was null or undefined when calling apiV2LabelUnassignPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }

        const response = await this.request({
            path: `/api/v2/label/unassign`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV2LabelUnassignPostRequestToJSON(requestParameters.apiV2LabelUnassignPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2LabelUnassignPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Unassigns a label from the specified user.
     * Unassign a label
     */
    async apiV2LabelUnassignPost(requestParameters: ApiV2LabelUnassignPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2LabelUnassignPost200Response> {
        const response = await this.apiV2LabelUnassignPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all labels assigned to the specified user.
     * User labels
     */
    async apiV2LabelUserListPostRaw(requestParameters: ApiV2LabelUserListPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV2LabelUserListPost200Response>> {
        if (requestParameters.apiV2LabelUserListPostRequest === null || requestParameters.apiV2LabelUserListPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelUserListPostRequest','Required parameter requestParameters.apiV2LabelUserListPostRequest was null or undefined when calling apiV2LabelUserListPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }

        const response = await this.request({
            path: `/api/v2/label/user/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV2LabelUserListPostRequestToJSON(requestParameters.apiV2LabelUserListPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV2LabelUserListPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns all labels assigned to the specified user.
     * User labels
     */
    async apiV2LabelUserListPost(requestParameters: ApiV2LabelUserListPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV2LabelUserListPost200Response> {
        const response = await this.apiV2LabelUserListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
