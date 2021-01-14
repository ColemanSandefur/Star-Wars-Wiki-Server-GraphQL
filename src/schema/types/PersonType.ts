import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { keys } from "../cacheAPI";
import { loadAll } from "../helper"

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
            resolve: (person) => {
                let x = loadAll([person.homeworld], keys.planets)[0]
                console.log(x);
                return x;
            }
        },
        films: {
            type: GraphQLList(FilmType),
            resolve: (person) => {
                return loadAll(person.films, keys.films);
            }
        },
        species: {
            type: GraphQLList(SpeciesType),
            resolve: (person) => {
                return loadAll(person.species, keys.species);
            }
        },
        vehicles: {
            type: GraphQLList(VehicleType),
            resolve: (person) => {
                return loadAll(person.vehicles, keys.vehicles);
            }
        },
        starships: {
            type: GraphQLList(StarshipType),
            resolve: (person) => {
                return loadAll(person.starships, keys.starships);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default PersonType