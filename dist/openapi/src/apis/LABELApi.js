"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LABELApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class LABELApi extends runtime.BaseAPI {
    /**
     * Assigns a label to the specified user.
     * Assign a label
     */
    async apiV2LabelAssignPostRaw(requestParameters, initOverrides) {
        if (requestParameters.apiV2LabelUnassignPostRequest === null || requestParameters.apiV2LabelUnassignPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelUnassignPostRequest', 'Required parameter requestParameters.apiV2LabelUnassignPostRequest was null or undefined when calling apiV2LabelAssignPost.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }
        const response = await this.request({
            path: `/api/v2/label/assign`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.ApiV2LabelUnassignPostRequestToJSON)(requestParameters.apiV2LabelUnassignPostRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ApiV2LabelAssignPost200ResponseFromJSON)(jsonValue));
    }
    /**
     * Assigns a label to the specified user.
     * Assign a label
     */
    async apiV2LabelAssignPost(requestParameters, initOverrides) {
        const response = await this.apiV2LabelAssignPostRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns the list of available labels.
     * Label list
     */
    async apiV2LabelListPostRaw(requestParameters, initOverrides) {
        if (requestParameters.apiV2LabelListPostRequest === null || requestParameters.apiV2LabelListPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelListPostRequest', 'Required parameter requestParameters.apiV2LabelListPostRequest was null or undefined when calling apiV2LabelListPost.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }
        const response = await this.request({
            path: `/api/v2/label/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.ApiV2LabelListPostRequestToJSON)(requestParameters.apiV2LabelListPostRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ApiV2LabelListPost200ResponseFromJSON)(jsonValue));
    }
    /**
     * Returns the list of available labels.
     * Label list
     */
    async apiV2LabelListPost(requestParameters, initOverrides) {
        const response = await this.apiV2LabelListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Unassigns a label from the specified user.
     * Unassign a label
     */
    async apiV2LabelUnassignPostRaw(requestParameters, initOverrides) {
        if (requestParameters.apiV2LabelUnassignPostRequest === null || requestParameters.apiV2LabelUnassignPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelUnassignPostRequest', 'Required parameter requestParameters.apiV2LabelUnassignPostRequest was null or undefined when calling apiV2LabelUnassignPost.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }
        const response = await this.request({
            path: `/api/v2/label/unassign`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.ApiV2LabelUnassignPostRequestToJSON)(requestParameters.apiV2LabelUnassignPostRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ApiV2LabelUnassignPost200ResponseFromJSON)(jsonValue));
    }
    /**
     * Unassigns a label from the specified user.
     * Unassign a label
     */
    async apiV2LabelUnassignPost(requestParameters, initOverrides) {
        const response = await this.apiV2LabelUnassignPostRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Returns all labels assigned to the specified user.
     * User labels
     */
    async apiV2LabelUserListPostRaw(requestParameters, initOverrides) {
        if (requestParameters.apiV2LabelUserListPostRequest === null || requestParameters.apiV2LabelUserListPostRequest === undefined) {
            throw new runtime.RequiredError('apiV2LabelUserListPostRequest', 'Required parameter requestParameters.apiV2LabelUserListPostRequest was null or undefined when calling apiV2LabelUserListPost.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api-sig"] = this.configuration.apiKey("api-sig"); // SignatureAuth authentication
        }
        const response = await this.request({
            path: `/api/v2/label/user/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.ApiV2LabelUserListPostRequestToJSON)(requestParameters.apiV2LabelUserListPostRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ApiV2LabelUserListPost200ResponseFromJSON)(jsonValue));
    }
    /**
     * Returns all labels assigned to the specified user.
     * User labels
     */
    async apiV2LabelUserListPost(requestParameters, initOverrides) {
        const response = await this.apiV2LabelUserListPostRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.LABELApi = LABELApi;
//# sourceMappingURL=LABELApi.js.map