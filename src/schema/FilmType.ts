import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import {getFromURL}  from "./helper"

import PersonType from "./PersonType";
import PlanetType from "./PlanetType";
import SpeciesType from "./SpeciesType";
import StarshipType from "./StarshipType";
import VehicleType from "./VehicleType";

const FilmType: GraphQLObjectType = new GraphQLObjectType({
    name: "Film",
    description: "...",
    
    fields: () => ({
        title: {type: GraphQLString},
        episode_id: {type: GraphQLString},
        opening_crawl: {type: GraphQLString},
        director: {type: GraphQLString},
        producer: {type: GraphQLString},
        release_date: {type: GraphQLString},
        characters: {
            type: GraphQLList(PersonType),
            resolve: (film, args, {loaders}) => {
                return loaders.person.loadMany(film.characters)
            }
        },
        planets: {
            type: GraphQLList(PlanetType),
            resolve: (film, args, {loaders}) => {
                return loaders.planet.loadMany(film.planets);
            }
        },
        starships: {
            type: GraphQLList(StarshipType),
            resolve: (film, args, {loaders}) => {
                return loaders.starship.loadMany(film.starships);
            }
        },
        vehicles: {
            type: GraphQLList(VehicleType),
            resolve: (film, args, {loaders}) => {
                return loaders.vehicle.loadMany(film.vehicles);
            }
        },
        species: {
            type: GraphQLList(SpeciesType),
            resolve: (film, args, {loaders}) => {
                return loaders.species.loadMany(film.species);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default FilmType