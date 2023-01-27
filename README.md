<br/>

![logo-graphqlana-narrow](https://user-images.githubusercontent.com/38172/213896525-2e0ebc4c-5e19-48a8-800d-03340eea8f34.png)

## Solana's blockchain data for humans

Solana data can be very hard to access and even harder to properly understand.

This has been the main drive behind the recent surge of services that are trying to democratise the access to that data through their APIs.

**GraphQLana** builds on top of those services and uses the power of GraphQL to create a human-friendly interface for on-chain data that can be used by technical and (more importantly) non-technical people.

## Features

### 🪡 Seamlessly combine multiple sources of data

Stop worrying about fetching data from multiple endpoints and stitching that all back together. With **GraphQLana** you get access to the top sources of data from Solana's blockchain without even knowing it.

Focus on the data that you want, and let us do all the work behind the scenes.

### ☑️ Get exactly the data that you need and nothing else

Why have to parse all the data if you just need a small sample? And what about having to fetch that additional data that didn't come in the first request?

With **GraphQLana** there's no extra data or missing fields, you get **exactly** what you want. We wish we could take the credits for that but it's just one of the benefits of using GraphQL.

### 🔎 Augment the data with richer types

Whenever it's relevant we extend the returned data with more complex types so we can provide better data than the originally returned by the source APIs.

For example, whenever we get a wallet address for a given property we convert that to the `Account` type which enables a whole new set of data in a very natural way.

![Screenshot_20230122_224314](https://user-images.githubusercontent.com/38172/213950243-715cb8a9-5ba0-4a8f-ba6e-caad8b487e12.png)

In this query we're navigation the wallet's NFT sales data and retrieving the SOL balance for each one of the buyers. Simples!

### 🧪 Quickly iterate in the online explorer

You don't need to setup a project or download an app to get started. Just hop into our online playground and start exploring the data!

Start with a small query and build on top of that. When you're happy with the data, use that query in your application and create something amazing with it!

### 🧭 Discover the unknown with the integrated documentation

Looking for the documentation? Well, with GraphQL everything is self-documented! We take advantage of GraphQL's declarative nature and provide auto-completion and schema validation out of the box.

![image](https://user-images.githubusercontent.com/38172/214044417-d4fb7468-f6cf-4c00-b01e-8127fdc3ec2a.png)

No more wasted time going through the docs to see how to use a given API, using **GraphQLana** will feel natural to you.

### 🔌 Get the best developer experience with the SDK

Integrate our SDK in your application for an improved experience with fully typed responses in your favourite language!

![Screenshot_20230123_115632](https://user-images.githubusercontent.com/38172/214035493-4aaef57f-713d-443c-9f96-a194b4d96ae7.png)

This is currently under development and is one of the main areas of improvement in the next few months.

## Getting started

Head to https://www.graphqlana.com and start exploring Solana's blockchain data with our online GraphQL explorer.

Why not starting with something simple like retrieving the SOL balance in your account?

```gql
query Account {
    account(address: "<add your wallet address>") {
        balances {
            nativeBalance
            nativeBalanceUSD
        }
    }
}
```

For now, using the GraphQL endpoint directly in your app isn't recommended as we're still developing the service and there could be breaking changes or issues with some of our data providers.

## Supported data sources

We're constantly improving the access to on-chain data through our supported services and currently support these providers:

-   [Helius](https://helius.xyz/)
-   [Shyft](https://shyft.to/)
-   [Hyperspace](https://hyperspace.xyz/)
-   [Flipside](https://flipsidecrypto.xyz/)
-   [Jupiter](https://jup.ag/)

**GraphQLana** doesn't expose all of these API's endpoints in our schema, the intention isn't to create a simple 1-to-1 match with each API but to curate a more human-readable schema that makes it easier to navigate through the data.

## Schema

**GraphQLana** is mainly focused on user-centered data so we define most of our queries based on a given wallet or set of wallets.

For that reason, the main query is the `account` query, although it also exposes a bunch of other queries to access a particular subset of the data.

![image](https://user-images.githubusercontent.com/38172/213898815-6ab35cf0-e65e-4733-a129-1cb5664f6d4f.png)

From the account query it's possible to find information about a token balances, associated .sol domains, transactions and existing NFTs.

There are many layers of data to explore for each of these fields and we're regularly improving the existing queries so the best option is to use our online playground and see the data that we can fetch.

## Contributing

Right now contributing to **GraphQLana** isn't as easy as we'd like it to be because we require a bunch of different API keys for it to work.

However, making changes is very simple due to the declarative approach for building our schema so it's possible to suggest changes without having to run things locally.

This is one of the top priorities going forward as we want to make this a community-first project that is as easy as possible to contribute to.

## Technologies

### [StepZen](https://stepzen.com/) GraphQL framework

GraphQLana use StepZen as its core GraphQL framework, using a low-code approach with the benefits of the declarative nature of GraphQL.

This makes it very easy to extend and very accessible to new contributors, which is one of the main reason why StepZen was chosen.

One of the core objective of this project is to make data more accessible and we want to extend that to our codebase as well.

### [Stellate](https://stellate.co/) GraphQL CDN

Even though StepZen already provides a bunch of optimizations out of the box, we use Stellate for our public-facing GraphQL endpoint so we get advanced caching optimizations and usage metrics.

This is an amazing service that makes queries to GraphQLana as fast as possible and improves the developer experience of those using our endpoint.

## Advanced Examples

**Get wallet information (balance, domains), nfts in the wallet and latest 10 sale or listing events**

```gql
{
    account(address: "6S51S6oah3e7khhQBFhPrUHurasWY9AGcEsEaZKyp184") {
        balances {
            nativeBalance
            nativeBalanceUSD
        }
        domains {
            names
        }
        nfts {
            edges {
                node {
                    name
                    collectionName
                    collectionStats {
                        averagePrice
                        floorPrice
                    }
                }
            }
        }
        events(first: 10, filters: { types: [NFT_SALE, NFT_LISTING] }) {
            edges {
                node {
                    dateUTC
                    description
                    source
                    type
                    amount
                    nfts {
                        name
                    }
                }
            }
        }
    }
}
```

**Get 10 items and the latest 10 sales from collection**

```gql
{
    collection(creatorAddress: "DnP3GRVqtR9vjxMZH4PcFuGZ4ZqhbNqoGzJuTrHACK6f") {
        nfts(first: 10) {
            edges {
                node {
                    name
                    tokenAddress
                    imageURL
                }
            }
        }
        events(first: 10, filters: { types: [NFT_SALE] }) {
            edges {
                node {
                    dateUTC
                    description
                    nfts {
                        tokenAddress
                    }
                }
            }
        }
    }
}
```
