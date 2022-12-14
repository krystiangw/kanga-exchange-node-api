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
import { ApiV2AomGetPost200ResponseOneOf1 } from './ApiV2AomGetPost200ResponseOneOf1';
import { ApiV2AomWithdrawPost200ResponseOneOf } from './ApiV2AomWithdrawPost200ResponseOneOf';
import { ApiV2AomWithdrawPost200ResponseOneOf1 } from './ApiV2AomWithdrawPost200ResponseOneOf1';
import { ApiV2AomWithdrawPost200ResponseOneOf2 } from './ApiV2AomWithdrawPost200ResponseOneOf2';
import { ApiV2PayPaymentGetPost200ResponseOneOf1 } from './ApiV2PayPaymentGetPost200ResponseOneOf1';
import { ApiV2PayPaymentGetPost200ResponseOneOf2 } from './ApiV2PayPaymentGetPost200ResponseOneOf2';
import { ApiV2PayPaymentGetPost200ResponseOneOf3 } from './ApiV2PayPaymentGetPost200ResponseOneOf3';
/**
 * @type ApiV2AomWithdrawPost200Response
 *
 * @export
 */
export type ApiV2AomWithdrawPost200Response = ApiV2AomGetPost200ResponseOneOf1 | ApiV2AomWithdrawPost200ResponseOneOf | ApiV2AomWithdrawPost200ResponseOneOf1 | ApiV2AomWithdrawPost200ResponseOneOf2 | ApiV2PayPaymentGetPost200ResponseOneOf1 | ApiV2PayPaymentGetPost200ResponseOneOf2 | ApiV2PayPaymentGetPost200ResponseOneOf3;
export declare function ApiV2AomWithdrawPost200ResponseFromJSON(json: any): ApiV2AomWithdrawPost200Response;
export declare function ApiV2AomWithdrawPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV2AomWithdrawPost200Response;
export declare function ApiV2AomWithdrawPost200ResponseToJSON(value?: ApiV2AomWithdrawPost200Response | null): any;
//# sourceMappingURL=ApiV2AomWithdrawPost200Response.d.ts.map