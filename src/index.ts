import { PublicApi } from './openapi/apis/PublicApi';


async function run() {
  const publicApi = new PublicApi();
  try {
    const results = await publicApi.apiV2MarketAssetsGet();
    console.log('===== results ', results);
  } catch (err) {
    console.log('===== err ', err);
  }
}

run();