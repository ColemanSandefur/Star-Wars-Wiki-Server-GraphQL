import express from 'express';
import { graphqlHTTP } from "express-graphql";

import MyQuery from "./schema"

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: MyQuery,
        graphiql: true
    })
)

app.listen(3000);