import { 
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import {getFromURL}  from "./helper"
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
                return getFromURL(species.homeworld);
            }
        },
        language: {type: GraphQLString},
        people: {
            type: PersonType,
            resolve: (species) => {
                return species.people.map(getFromURL)
            }
        },
        films: {
            type: FilmType,
            resolve: (species) => {
                return species.films.map(getFromURL)
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default SpeciesType