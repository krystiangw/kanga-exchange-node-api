import { Configuration, TradeApi, PublicApi, getHmac } from './';
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
      limit: 100
    };

    const conf = new Configuration({
      apiKey: getHmac(secretKey, body),
      // for Node < 18.0 needs to provide fetch API
      // fetchApi: fetch
    });
    const tradeApi = new TradeApi(conf);
    const results = await tradeApi.apiV2MarketOrderHistoryListPostRaw({
      apiV2MarketOrderBookPostRequest: body
    });
    console.log('getUserOrderListresults ', results);
  } catch (err) {
    console.error(err);
  }
}

// getOrderbookRawGet();
getUserOrderList();