import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";
import FilmType from "./FilmType";

import {getFromURL}  from "./helper"
import PersonType from "./PersonType";

const VehicleType: GraphQLObjectType = new GraphQLObjectType({
    name: "Vehicle",
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
        vehicle_class: {type: GraphQLString},
        pilots: {
            type: GraphQLList(PersonType),
            resolve: (vehicle, args, {loaders}) => {
                return loaders.pilot.loadMany(vehicle.pilots);
            }
        },
        films: {
            type: GraphQLList(FilmType),
            resolve: (vehicle, args, {loaders}) => {
                return loaders.film.loadMany(vehicle.films);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default VehicleType