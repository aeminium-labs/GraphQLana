import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  /** The address of the wallet */
  address?: Maybe<Scalars['String']>;
  /** Balances of native and SPL tokens in the wallet */
  balances?: Maybe<Balances>;
  /** Associated .sol domains */
  domains?: Maybe<Domains>;
  /** Historical NFT events from wallet */
  events?: Maybe<AccountEventsConnection>;
  /** NFTs stored in the wallet */
  nfts?: Maybe<AccountNftsConnection>;
};


export type AccountEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SortType>;
  types?: InputMaybe<Array<InputMaybe<EventTypes>>>;
};


export type AccountNftsArgs = {
  after?: InputMaybe<Scalars['String']>;
};

export type AccountEvents = {
  __typename?: 'AccountEvents';
  amount?: Maybe<Scalars['Float']>;
  buyer?: Maybe<Scalars['String']>;
  buyerAccount?: Maybe<Account>;
  description?: Maybe<Scalars['String']>;
  nfts?: Maybe<Array<Maybe<NftFingerprint>>>;
  saleType?: Maybe<Scalars['String']>;
  seller?: Maybe<Scalars['String']>;
  sellerAccount?: Maybe<Account>;
  signature?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['Int']>;
  staker?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
};

export type AccountEventsConnection = {
  __typename?: 'AccountEventsConnection';
  edges?: Maybe<Array<Maybe<AccountEventsEdge>>>;
  pageInfo: PageInfo;
};

export type AccountEventsEdge = {
  __typename?: 'AccountEventsEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<AccountEvents>;
};

export type AccountNftsConnection = {
  __typename?: 'AccountNftsConnection';
  edges?: Maybe<Array<Maybe<AccountNftsEdge>>>;
  pageInfo: PageInfo;
};

export type AccountNftsEdge = {
  __typename?: 'AccountNftsEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Asset>;
};

export type Asset = {
  __typename?: 'Asset';
  activeListings?: Maybe<Array<Maybe<Listing>>>;
  collectionAddress?: Maybe<Scalars['String']>;
  collectionName?: Maybe<Scalars['String']>;
  collectionStats?: Maybe<CollectionStats>;
  howrareRarity?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
  moonrankRarity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tokenAddress: Scalars['String'];
  traits?: Maybe<Array<Maybe<Trait>>>;
};

export type Balance = {
  __typename?: 'Balance';
  amount?: Maybe<Scalars['Float']>;
  amountUSD?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
  mint?: Maybe<Scalars['String']>;
  tokenAccount?: Maybe<Scalars['String']>;
};

export type Balances = {
  __typename?: 'Balances';
  nativeBalance?: Maybe<Scalars['Float']>;
  nativeBalanceDecimals?: Maybe<Scalars['Float']>;
  nativeBalanceUSD?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Array<Maybe<Balance>>>;
};

export type CollectionStats = {
  __typename?: 'CollectionStats';
  averagePrice?: Maybe<Scalars['Float']>;
  discordMembers?: Maybe<Scalars['Int']>;
  floorPrice?: Maybe<Scalars['Float']>;
  floorPriceUSD?: Maybe<Scalars['Float']>;
  holders?: Maybe<Scalars['Int']>;
  marketCap?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Int']>;
  twitterFollowers?: Maybe<Scalars['Int']>;
  volume1day?: Maybe<Scalars['Float']>;
  volume7day?: Maybe<Scalars['Float']>;
};

export type Domains = {
  __typename?: 'Domains';
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum EventTypes {
  BurnNft = 'BURN_NFT',
  NftAuctionCreated = 'NFT_AUCTION_CREATED',
  NftAuctionStarted = 'NFT_AUCTION_STARTED',
  NftBid = 'NFT_BID',
  NftBidCancelled = 'NFT_BID_CANCELLED',
  NftCancelListing = 'NFT_CANCEL_LISTING',
  NftGlobalBid = 'NFT_GLOBAL_BID',
  NftGlobalBidCancelled = 'NFT_GLOBAL_BID_CANCELLED',
  NftListing = 'NFT_LISTING',
  NftMint = 'NFT_MINT',
  NftMintRejected = 'NFT_MINT_REJECTED',
  NftParticipationReward = 'NFT_PARTICIPATION_REWARD',
  NftRentActivate = 'NFT_RENT_ACTIVATE',
  NftRentCancelListing = 'NFT_RENT_CANCEL_LISTING',
  NftRentListing = 'NFT_RENT_LISTING',
  NftRentUpdateListing = 'NFT_RENT_UPDATE_LISTING',
  NftSale = 'NFT_SALE',
  StakeToken = 'STAKE_TOKEN',
  UnstakeToken = 'UNSTAKE_TOKEN'
}

export type Listing = {
  __typename?: 'Listing';
  amount?: Maybe<Scalars['Float']>;
  marketplace?: Maybe<Marketplaces>;
  seller?: Maybe<Scalars['String']>;
  transactionSignature?: Maybe<Scalars['String']>;
};

export enum Marketplaces {
  CoralCube = 'CORAL_CUBE',
  DigitalEyes = 'DIGITAL_EYES',
  ExchangeArt = 'EXCHANGE_ART',
  FormFunction = 'FORM_FUNCTION',
  Holaplex = 'HOLAPLEX',
  Hyperspace = 'HYPERSPACE',
  MagicEden = 'MAGIC_EDEN',
  Opensea = 'OPENSEA',
  Solanart = 'SOLANART',
  Solport = 'SOLPORT',
  Solsea = 'SOLSEA',
  Unknown = 'UNKNOWN',
  Yawww = 'YAWWW'
}

export type NftFingerprint = {
  __typename?: 'NftFingerprint';
  activeListings?: Maybe<Array<Maybe<Listing>>>;
  burned?: Maybe<Scalars['Boolean']>;
  firstVerifiedCreator?: Maybe<Scalars['String']>;
  mint?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  verifiedCollectionAddress?: Maybe<Scalars['String']>;
};

/**
 * PageInfo indicates if more results are available in a connection.
 * See *GraphQL Cursor Connections Specification*
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor corresponding to the last node in edges */
  endCursor: Scalars['String'];
  /** Indicates whether more edges exist following the set defined by the pagination arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior to the set defined by the pagination arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** Cursor corresponding to the first node in edges */
  startCursor: Scalars['String'];
};

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type Query = {
  __typename?: 'Query';
  /** Account information for a given wallet address */
  account?: Maybe<Account>;
  accountEvents?: Maybe<AccountEventsConnection>;
  accountNfts?: Maybe<AccountNftsConnection>;
  balances?: Maybe<Balances>;
  collectionStatsByCreator?: Maybe<CollectionStats>;
  collectionStatsByName?: Maybe<CollectionStats>;
  collectionStatsByToken?: Maybe<CollectionStats>;
  convertToUsd?: Maybe<ConvertToUsd>;
  domains?: Maybe<Domains>;
  nftFingerprint?: Maybe<NftFingerprint>;
  shyftDomains?: Maybe<Domains>;
  tokenMarketState?: Maybe<TokenMarketStateResponse>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryAccountArgs = {
  address: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryAccountEventsArgs = {
  address: Scalars['String'];
  after?: Scalars['String'];
  first?: Scalars['Int'];
  sortOrder?: InputMaybe<SortType>;
  types?: InputMaybe<Array<InputMaybe<EventTypes>>>;
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryAccountNftsArgs = {
  address: Scalars['String'];
  after?: Scalars['String'];
  first?: Scalars['Int'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryBalancesArgs = {
  address: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryCollectionStatsByCreatorArgs = {
  creatorAddress: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryCollectionStatsByNameArgs = {
  name: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryCollectionStatsByTokenArgs = {
  tokenAddress: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryConvertToUsdArgs = {
  amount: Scalars['Float'];
  decimals?: InputMaybe<Scalars['Float']>;
  token?: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryDomainsArgs = {
  address: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryNftFingerprintArgs = {
  tokenAddress: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryShyftDomainsArgs = {
  address: Scalars['String'];
};


/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryTokenMarketStateArgs = {
  address: Scalars['String'];
};

export enum SortType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type TokenMarketStateResponse = {
  __typename?: 'TokenMarketStateResponse';
  howrareRarity?: Maybe<Scalars['Int']>;
  moonrankRarity?: Maybe<Scalars['Int']>;
};

export type Trait = {
  __typename?: 'Trait';
  trait_type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConvertToUsd = {
  __typename?: 'convertToUsd';
  price?: Maybe<Scalars['Float']>;
};

export type GetAccountQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetAccountQuery = { __typename?: 'Query', account?: { __typename?: 'Account', address?: string | null, balances?: { __typename?: 'Balances', nativeBalance?: number | null, tokens?: Array<{ __typename?: 'Balance', amount?: number | null, decimals?: number | null, mint?: string | null, tokenAccount?: string | null } | null> | null } | null, domains?: { __typename?: 'Domains', names?: Array<string | null> | null } | null } | null };

export type GetAccountEventsQueryVariables = Exact<{
  address: Scalars['String'];
  types?: InputMaybe<Array<InputMaybe<EventTypes>> | InputMaybe<EventTypes>>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<SortType>;
}>;


export type GetAccountEventsQuery = { __typename?: 'Query', account?: { __typename?: 'Account', address?: string | null, events?: { __typename?: 'AccountEventsConnection', edges?: Array<{ __typename?: 'AccountEventsEdge', cursor?: string | null, node?: { __typename?: 'AccountEvents', amount?: number | null, buyer?: string | null, description?: string | null, saleType?: string | null, seller?: string | null, signature?: string | null, slot?: number | null, staker?: string | null, timestamp?: number | null, nfts?: Array<{ __typename?: 'NftFingerprint', burned?: boolean | null, firstVerifiedCreator?: string | null, mint?: string | null, name?: string | null, verifiedCollectionAddress?: string | null, activeListings?: Array<{ __typename?: 'Listing', amount?: number | null, marketplace?: Marketplaces | null, seller?: string | null, transactionSignature?: string | null } | null> | null } | null> | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string } } | null } | null };

export type GetAccountNftsQueryVariables = Exact<{
  address: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetAccountNftsQuery = { __typename?: 'Query', account?: { __typename?: 'Account', address?: string | null, nfts?: { __typename?: 'AccountNftsConnection', edges?: Array<{ __typename?: 'AccountNftsEdge', cursor?: string | null, node?: { __typename?: 'Asset', collectionAddress?: string | null, collectionName?: string | null, howrareRarity?: number | null, imageURL?: string | null, moonrankRarity?: number | null, name?: string | null, tokenAddress: string, activeListings?: Array<{ __typename?: 'Listing', amount?: number | null, marketplace?: Marketplaces | null, seller?: string | null, transactionSignature?: string | null } | null> | null, collectionStats?: { __typename?: 'CollectionStats', averagePrice?: number | null, discordMembers?: number | null, floorPrice?: number | null, floorPriceUSD?: number | null, holders?: number | null, marketCap?: number | null, supply?: number | null, twitterFollowers?: number | null, volume1day?: number | null, volume7day?: number | null } | null, traits?: Array<{ __typename?: 'Trait', trait_type?: string | null, value?: string | null } | null> | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string } } | null } | null };


export const GetAccountDocument = gql`
    query getAccount($address: String!) {
  account(address: $address) {
    address
    balances {
      nativeBalance
      tokens {
        amount
        decimals
        mint
        tokenAccount
      }
    }
    domains {
      names
    }
  }
}
    `;
export const GetAccountEventsDocument = gql`
    query getAccountEvents($address: String!, $types: [EventTypes], $first: Int, $after: String, $sortOrder: SortType) {
  account(address: $address) {
    address
    events(types: $types, first: $first, after: $after, sortOrder: $sortOrder) {
      edges {
        cursor
        node {
          amount
          buyer
          description
          nfts {
            activeListings {
              amount
              marketplace
              seller
              transactionSignature
            }
            burned
            firstVerifiedCreator
            mint
            name
            verifiedCollectionAddress
          }
          saleType
          seller
          signature
          slot
          staker
          timestamp
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
}
    `;
export const GetAccountNftsDocument = gql`
    query getAccountNfts($address: String!, $after: String) {
  account(address: $address) {
    address
    nfts(after: $after) {
      edges {
        cursor
        node {
          activeListings {
            amount
            marketplace
            seller
            transactionSignature
          }
          collectionAddress
          collectionName
          collectionStats {
            averagePrice
            discordMembers
            floorPrice
            floorPriceUSD
            holders
            marketCap
            supply
            twitterFollowers
            volume1day
            volume7day
          }
          howrareRarity
          imageURL
          moonrankRarity
          name
          tokenAddress
          traits {
            trait_type
            value
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAccount(variables: GetAccountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAccountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAccountQuery>(GetAccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAccount', 'query');
    },
    getAccountEvents(variables: GetAccountEventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAccountEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAccountEventsQuery>(GetAccountEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAccountEvents', 'query');
    },
    getAccountNfts(variables: GetAccountNftsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAccountNftsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAccountNftsQuery>(GetAccountNftsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAccountNfts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;