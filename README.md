## [Kanga Exchange](https://kanga.exchange/) Node API library

Generated using [@openapitools/openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli)
and latest schema file [kanga-api-schema](kanga-api-schema.yaml)

See [example](src/example.ts)

# Install
`npm install kanga-exchange-node-api`

For Node < 18.0 needs to provide fetch API as part of configuration


# Run example
```
## provide .env file
touch .env
echo "KANGA_PUBLIC="YOUR_PUBLIC_KANGA_KEY"" > .env
echo "KANGA_SECRET="YOUR_SECRET_KANGA_KEY"" > .env
npm run example
```