import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { keys } from "../cacheAPI";
import { loadAll } from "../helper"

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
                return loadAll(film.characters, keys.people)
            }
        },
        planets: {
            type: GraphQLList(PlanetType),
            resolve: (film) => {
                return loadAll(film.planets, keys.planets);
            }
        },
        starships: {
            type: GraphQLList(StarshipType),
            resolve: (film) => {
                return loadAll(film.starships, keys.starships);
            }
        },
        vehicles: {
            type: GraphQLList(VehicleType),
            resolve: (film) => {
                return loadAll(film.vehicles, keys.vehicles);
            }
        },
        species: {
            type: GraphQLList(SpeciesType),
            resolve: (film) => {
                return loadAll(film.species, keys.species);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default FilmType