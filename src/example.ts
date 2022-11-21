import { Configuration, TradeApi, PublicApi, getHmac } from './index';
import * as dotenv from 'dotenv'

const secretKey = dotenv.config().parsed?.KANGA_SECRET as string;
const publicKey = dotenv.config().parsed?.KANGA_PUBLIC as string;

// Kanga exchange public API exaample
async function getOrderbookRawGet() {
  const publicApi = new PublicApi();
  try {
    const results = await publicApi.apiV2MarketOrderbookRawGet({
      market: 'KNG-oPLN'
    });
    console.log('getOrderbookRawGet ', results);
  } catch (err) {
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
      limit: 105
    };

    const conf = new Configuration({
      apiKey: getHmac(secretKey, body)
    });
    const tradeApi = new TradeApi(conf);
    const results = await tradeApi.apiV2MarketOrderListPost({
      apiV2MarketOrderListPostRequest: body
    });
    console.log('getUserOrderListresults ', results);
  } catch (err) {
    console.error(err);
  }
}

getOrderbookRawGet();
getUserOrderList();