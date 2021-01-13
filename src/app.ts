import express from 'express';
import { graphqlHTTP } from "express-graphql";
import DataLoader from "dataloader"

import MyQuery from "./schema"
import { getFromURL } from './schema/helper';

const app = express();

app.use(graphqlHTTP(req => {
    const genericLoader = new DataLoader(
        keys => Promise.all(keys.map((data) => {
            return getFromURL(<string>data)
        }))
    );

    const loaders = {
        person: genericLoader,
        planet: genericLoader,
        film: genericLoader,
        species: genericLoader,
        vehicle: genericLoader,
        starship: genericLoader
    };

    return {
        context: {loaders},
        schema: MyQuery,
        graphiql: true
    }
}));

app.listen(3000);