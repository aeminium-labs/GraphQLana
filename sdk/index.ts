import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";

export function initGraphQLana(endpoint: string, options?: any) {
    const client = new GraphQLClient(endpoint, options);

    return getSdk(client);
}

export * from "./sdk";
