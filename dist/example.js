"use strict";
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
const _1 = require("./");
const dotenv = __importStar(require("dotenv"));
const secretKey = dotenv.config().parsed?.KANGA_SECRET;
const publicKey = dotenv.config().parsed?.KANGA_PUBLIC;
// Kanga exchange public API exaample
async function getOrderbookRawGet() {
    const publicApi = new _1.PublicApi();
    try {
        const results = await publicApi.apiV2MarketOrderbookRawGet({
            market: 'KNG-oPLN'
        });
        console.log('getOrderbookRawGet response: ', JSON.stringify(results));
    }
    catch (err) {
        console.error(err);
    }
}
// Kanga exchange API with authenticate example
async function getUserOrderList() {
    try {
        const time = Date.now();
        const body = {
            nonce: time,
            appId: publicKey,
            market: 'KNG-oPLN',
            limit: 100
        };
        const conf = new _1.Configuration({
            apiKey: (0, _1.getHmac)(secretKey, body),
            // for Node < 18.0 needs to provide fetch API
            // fetchApi: fetch
        });
        const tradeApi = new _1.TradeApi(conf);
        const results = await tradeApi.apiV2MarketOrderListPost({
            apiV2MarketOrderListPostRequest: body
        });
        console.log('getUserOrderList response: ', results);
    }
    catch (err) {
        console.error(err);
    }
}
getOrderbookRawGet();
getUserOrderList();
//# sourceMappingURL=example.js.map