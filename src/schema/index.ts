import { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import PersonType from "./PersonType"
import PlanetType from "./PlanetType"

import { getPersonByID, getPlanetByID } from "./helper";

const QueryType = new GraphQLObjectType({
    name: "Query", 
    description: "...",

    fields: () => ({
        person: {
            type: PersonType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (root, args) => {
                return getPersonByID(args.id);
            }
        },
        planet: {
            type: PlanetType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (root, args) => {
                return getPlanetByID(args.id);
            }
        }
    })
});

export default new GraphQLSchema({
    query: QueryType,
})