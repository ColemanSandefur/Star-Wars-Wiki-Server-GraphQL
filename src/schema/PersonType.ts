import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import {getFromURL}  from "./helper";

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
                return getFromURL(person.homeworld);
            }
        },
        films: {
            type: GraphQLList(FilmType),
            resolve: (person) => {
                return person.films.map(getFromURL);
            }
        },
        species: {
            type: GraphQLList(SpeciesType),
            resolve: (person) => {
                return person.species.map(getFromURL);
            }
        },
        vehicles: {
            type: GraphQLList(VehicleType),
            resolve: (person) => {
                return person.vehicles.map(getFromURL);
            }
        },
        starships: {
            type: GraphQLList(StarshipType),
            resolve: (person) => {
                return person.starships.map(getFromURL);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    })
});

export default PersonType