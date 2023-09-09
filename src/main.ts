import {prepareAndStartServer} from "./infrastructure/graphql/server.js";

prepareAndStartServer().catch(err => {
    console.error(`Failed to start Apollo server: ${(err as Error).message}`);
    process.exit(1)
});
