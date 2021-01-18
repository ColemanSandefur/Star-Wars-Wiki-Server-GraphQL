import express from 'express';
import { graphqlHTTP } from "express-graphql";
const cors = require("cors");

import MyQuery from "./schema"
import { loadAPI } from "./schema/cacheAPI";

const app = express();

app.use(cors());

loadAPI().then(() => {
    app.use('/graphql', graphqlHTTP({
        schema: MyQuery,
        graphiql: true
    }));
    
    app.listen(5000, () => {
        console.log("running on localhost:5000");
    });
});