import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://query.graphqlana.com/",
    documents: ["./sdk/operations.graphql"],
    generates: {
        "./sdk/sdk.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-graphql-request",
            ],
        },
    },
};
export default config;
