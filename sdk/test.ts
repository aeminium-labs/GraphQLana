import { EventTypes, initGraphQLana } from ".";

const sdk = initGraphQLana("https://query.graphqlana.com/");

async function go() {
    const { account } = await sdk.getAccount({
        address: "6S51S6oah3e7khhQBFhPrUHurasWY9AGcEsEaZKyp184",
    });

    console.log(account?.domains);

    const { account: accountEvents } = await sdk.getAccountEvents({
        address: "6S51S6oah3e7khhQBFhPrUHurasWY9AGcEsEaZKyp184",
        types: [EventTypes.NftMint],
    });

    console.log(accountEvents?.events?.edges?.map((e) => e?.node?.description));
}

go();
