import {readFileSync} from "fs";
import * as path from "path";
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import * as query from './query';
import * as mutation from './mutation';

const typeDefs = readFileSync(path.resolve('src/infrastructure/graphql/schema.graphql')).toString('utf-8');

const resolvers = {
    Query: {...query},
    Mutation: {...mutation},
}

export async function prepareAndStartServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    const {url} = await startStandaloneServer(server, {
        listen: {port: 4000},
    });

    console.log(`🚀  Server ready at: ${url}`);
}
