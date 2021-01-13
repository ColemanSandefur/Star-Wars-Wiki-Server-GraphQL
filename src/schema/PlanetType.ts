import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import PersonType from "./PersonType"
import {getFromURL}  from "./helper"
import FilmType from "./FilmType";

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
            resolve: (planet) => planet.residents.map(getFromURL)
        },
        films: {
            type: GraphQLList(FilmType),
            resolve: (planet) => planet.films.map(getFromURL)
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default PlanetType