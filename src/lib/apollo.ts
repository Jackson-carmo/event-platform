import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ozalv71gfp01xse3df5hxy/master',
    cache: new InMemoryCache()
})