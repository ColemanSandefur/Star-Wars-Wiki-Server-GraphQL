import express from 'express';
import { graphqlHTTP } from "express-graphql";
import DataLoader from "dataloader"
const cors = require("cors");

import MyQuery from "./schema"
import { getFromURL } from './schema/helper';
import { loadAPI } from "./schema/cacheAPI";

const app = express();

app.use(cors());

loadAPI().then(() => {
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
    
    app.listen(5000, () => {
        console.log("running on localhost:5000");
    });
});