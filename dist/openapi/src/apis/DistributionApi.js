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
import { ApiV2DistributionCreatePost200ResponseFromJSON, ApiV2DistributionCreatePostRequestToJSON, ApiV2DistributionGroupListPost200ResponseFromJSON, ApiV2LabelListPostRequestToJSON, } from '../models';
/**
 *
 */
export class DistributionApi extends runtime.BaseAPI {
    /**
     * Creates a distribution
     * Distribution create
     */
    async apiV2DistributionCreatePostRaw(requestParameters, initOverrides) {
        if (requestParameters.apiV2DistributionCreatePostRequest === null || requestParameters.apiV2DistributionCreatePostRequest === undefined) {
            throw new runtime.RequiredError('apiV2DistributionCreatePostRequest', 'Required parameter requestParameters.apiV2DistributionCreatePostRequest was null or undefined when calling apiV2DistributionCreatePost.');
        }
        const queryParameters = {};
        const headerParameters = {};
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
    async apiV2DistributionCreatePost(requestParameters, initOverrides) {
        const response = await this.apiV2DistributionCreatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Lists distribution groups
     * Distribution group list
     */
    async apiV2DistributionGroupListPostRaw(requestParameters, initOverrides) {
        if (requestParameters.apiV2LabelListPostRequest === null || requestParameters.apiV2LabelListPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelListPostRequest', 'Required parameter requestParameters.apiV2LabelListPostRequest was null or undefined when calling apiV2DistributionGroupListPost.');
        }
        const queryParameters = {};
        const headerParameters = {};
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
    async apiV2DistributionGroupListPost(requestParameters, initOverrides) {
        const response = await this.apiV2DistributionGroupListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
//# sourceMappingURL=DistributionApi.js.map