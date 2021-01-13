import { 
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import {getFromURL}  from "./helper"

const StarshipType: GraphQLObjectType = new GraphQLObjectType({
    name: "Starship",
    description: "...",
    
    fields: () => ({
        name: {type: GraphQLString},
    })
});

export default StarshipType