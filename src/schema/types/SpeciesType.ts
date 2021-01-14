import { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from "graphql";

import { keys } from "../cacheAPI";
import { loadAll } from "../helper"

import PersonType from "./PersonType";
import PlanetType from "./PlanetType";
import FilmType from "./FilmType";

const SpeciesType: GraphQLObjectType = new GraphQLObjectType({
    name: "Species",
    description: "...",
    
    fields: () => ({
        name: {type: GraphQLString},
        classification: {type: GraphQLString},
        designation: {type: GraphQLString},
        average_height: {type: GraphQLString},
        skin_colors: {type: GraphQLString},
        hair_colors: {type: GraphQLString},
        ele_colors: {type: GraphQLString},
        average_lifespan: {type: GraphQLString},
        homeworld: {
            type: PlanetType,
            resolve: (species) => {
                return loadAll(species.homeworld, keys.planets);
            }
        },
        language: {type: GraphQLString},
        people: {
            type: GraphQLList(PersonType),
            resolve: (species) => {
                return loadAll(species.people, keys.people);
            }
        },
        films: {
            type: GraphQLList(FilmType),
            resolve: (species) => {
                return loadAll(species.films, keys.films);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default SpeciesType