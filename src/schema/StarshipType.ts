import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";
import FilmType from "./FilmType";

import {getFromURL}  from "./helper"
import PersonType from "./PersonType";

const StarshipType: GraphQLObjectType = new GraphQLObjectType({
    name: "Starship",
    description: "...",
    
    fields: () => ({
        name: {type: GraphQLString},
        model: {type: GraphQLString},
        manufacturer: {type: GraphQLString},
        cost_in_credits: {type: GraphQLString},
        length: {type: GraphQLString},
        max_atmospheric_speed: {type: GraphQLString},
        crew: {type: GraphQLString},
        passengers: {type: GraphQLString},
        cargo_capacity: {type: GraphQLString},
        consumables: {type: GraphQLString},
        hyperdrive_rating: {type: GraphQLString},
        MGLT: {type: GraphQLString},
        starship_class: {type: GraphQLString},
        pilots: {
            type: GraphQLList(PersonType),
            resolve: (starship, args, {loaders}) => {
                return loaders.person.loadMany(starship.pilots);
            }
        },
        films: {
            type: GraphQLList(FilmType),
            resolve: (starship, args, {loaders}) => {
                return loaders.film.loadMany(starship.films);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default StarshipType