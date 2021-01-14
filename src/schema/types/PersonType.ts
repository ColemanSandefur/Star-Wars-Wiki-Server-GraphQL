import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import {getFromURL}  from "../helper";

import PlanetType from "./PlanetType";
import FilmType from "./FilmType";
import SpeciesType from "./SpeciesType";
import VehicleType from "./VehicleType";
import StarshipType from "./StarshipType";

const PersonType: GraphQLObjectType = new GraphQLObjectType({
    name: "Person",
    description: "...",
    
    fields: () => ({
        name: {type: GraphQLString},
        height: {type: GraphQLString},
        mass: {type: GraphQLString},
        hair_color: {type: GraphQLString},
        skin_color: {type: GraphQLString},
        eye_color: {type: GraphQLString},
        birth_year: {type: GraphQLString},
        gender: {type: GraphQLString},
        homeworld: {
            type: PlanetType,
            resolve: (person, args, {loaders}) => {
                return loaders.planet.load(person.homeworld);
            }
        },
        films: {
            type: GraphQLList(FilmType),
            resolve: (person, args, {loaders}) => {
                return loaders.film.loadMany(person.films);
            }
        },
        species: {
            type: GraphQLList(SpeciesType),
            resolve: (person, args, {loaders}) => {
                return loaders.species.loadMany(person.species);
            }
        },
        vehicles: {
            type: GraphQLList(VehicleType),
            resolve: (person, args, {loaders}) => {
                return loaders.vehicle.loadMany(person.vehicles);
            }
        },
        starships: {
            type: GraphQLList(StarshipType),
            resolve: (person, args, {loaders}) => {
                return loaders.starship.loadMany(person.starships);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default PersonType