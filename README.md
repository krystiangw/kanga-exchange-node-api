## [Kanga Exchange](https://kanga.exchange/) Node API library

![NPM Downloads](https://img.shields.io/npm/dw/kanga-exchange-node-api)

Generated using [@openapitools/openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli)
and schema file [kanga-api-schema](kanga-api-schema.yaml)

# Install

From NPM [https://www.npmjs.com/package/kanga-exchange-node-api](https://www.npmjs.com/package/kanga-exchange-node-api)

```npm install kanga-exchange-node-api```

For Node < 18.0 needs to provide fetch API as part of configuration

# Example

```
import { PublicApi } from 'kanga-exchange-node-api';

const publicApi = new PublicApi();
const results = await publicApi.apiV2MarketOrderbookRawGet({
  market: 'KNG-oPLN'
});
```

See [full example](src/example.ts)

# Run example
```
git clone https://github.com/krystiangw/kanga-exchange-node-api.git
cd kanga-exchange-node-api
npm install

## provide .env file
touch .env
echo "KANGA_PUBLIC="YOUR_PUBLIC_KANGA_KEY"" > .env
echo "KANGA_SECRET="YOUR_SECRET_KANGA_KEY"" > .env

npm run example
```
