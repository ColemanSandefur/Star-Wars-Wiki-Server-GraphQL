import { 
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { keys } from "../cacheAPI";
import { loadAll } from "../helper"

import PersonType from "./PersonType"
import FilmType from "./FilmType";
import { getIdFromLink } from "../apiTypes/apiLoader/apiLoader";

const PlanetType: GraphQLObjectType = new GraphQLObjectType({
    name: "Planet",
    description: "...",
    
    fields: () => ({
        name: {type: GraphQLString},
        rotation_period: {type: GraphQLString},
        orbital_period: {type: GraphQLString},
        diameter: {type: GraphQLString},
        climate: {type: GraphQLString},
        gravity: {type: GraphQLString},
        terrain: {type: GraphQLString},
        surface_water: {type: GraphQLString},
        population: {type: GraphQLString},
        residents: {
            type: GraphQLList(PersonType),
            resolve: (planet) => loadAll(planet.residents, keys.people)
        },
        films: {
            type: GraphQLList(FilmType),
            resolve: (planet) => loadAll(planet.films, keys.films)
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
        id: {
            type: GraphQLID,
            resolve: (planet) => {
                return getIdFromLink(planet.url)
            }
        }
    })
});

export default PlanetType