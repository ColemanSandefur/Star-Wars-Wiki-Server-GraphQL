import { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLUnionType,
} from "graphql";

import { arrays, keys } from "./cacheAPI";

import PersonType from "./types/PersonType";
import PlanetType from "./types/PlanetType";
import FilmType from "./types/FilmType";
import SpeciesType from "./types/SpeciesType";
import VehicleType from "./types/VehicleType";
import StarshipType from "./types/StarshipType";

import { keyPair, AllTypes } from "./apiTypes/apiLoader/apiLoader"

function resolver<T extends AllTypes>(keys: keyPair<T>, arr: T[], args: any) {
    if (args.id !== undefined) {
        return [keys[args.id]]
    }

    return arr;
}

const QueryType = new GraphQLObjectType({
    name: "Query", 
    description: "...",

    fields: () => ({
        person: {
            type: GraphQLList(PersonType),
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args) => {
                return resolver(keys.people, arrays.people, args);
            }
        },
        planet: {
            type: GraphQLList(PlanetType),
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args) => {
                return resolver(keys.planets, arrays.planets, args);
            }
        },
        film: {
            type: GraphQLList(FilmType),
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args) => {
                return resolver(keys.films, arrays.films, args);
            }
        }, 
        species: {
            type: GraphQLList(SpeciesType),
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args) => {
                return resolver(keys.species, arrays.species, args);
            }
        },
        vehicle: {
            type: GraphQLList(VehicleType),
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args) => {
                return resolver(keys.vehicles, arrays.vehicles, args);
            }
        },
        starship: {
            type: GraphQLList(StarshipType),
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args) => {
                return resolver(keys.starships, arrays.starships, args);
            }
        },
    })
});

export default new GraphQLSchema({
    query: QueryType,
})