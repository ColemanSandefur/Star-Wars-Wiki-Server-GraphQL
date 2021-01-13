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
            resolve: (film) => {
                return film.characters.map(getFromURL);
            }
        },
        Planets: {
            type: GraphQLList(PlanetType),
            resolve: (film) => {
                return film.Planets.map(getFromURL);
            }
        },
        starships: {
            type: GraphQLList(StarshipType),
            resolve: (film) => {
                return film.starships.map(getFromURL);
            }
        },
        vehicles: {
            type: GraphQLList(VehicleType),
            resolve: (film) => {
                return film.vehicles.map(getFromURL);
            }
        },
        species: {
            type: GraphQLList(SpeciesType),
            resolve: (film) => {
                return film.species.map(getFromURL);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default FilmType