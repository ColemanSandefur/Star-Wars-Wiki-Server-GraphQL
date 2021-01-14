import { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
} from "graphql";

import { getFilmByID, getPersonByID, getPlanetByID, getSpeciesByID, getStarshipByID, getVehicleByID } from "./helper";
import { arrays, keys } from "./cacheAPI";

import PersonType from "./types/PersonType";
import PlanetType from "./types/PlanetType";
import FilmType from "./types/FilmType";
import SpeciesType from "./types/SpeciesType";
import VehicleType from "./types/VehicleType";
import StarshipType from "./types/StarshipType";

import loadAll from "./apiTypes/apiLoader/apiLoader";
import { PersonAPI } from "./apiTypes/PersonAPI";

const QueryType = new GraphQLObjectType({
    name: "Query", 
    description: "...",

    fields: () => ({
        person: {
            type: PersonType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.person.load(getPersonByID(args.id));
            }
        },
        planet: {
            type: PlanetType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.planet.load(getPlanetByID(args.id));
            }
        },
        film: {
            type: FilmType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.film.load(getFilmByID(args.id));
            }
        }, 
        species: {
            type: SpeciesType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.species.load(getSpeciesByID(args.id));
            }
        },
        vehicle: {
            type: VehicleType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.vehicle.load(getVehicleByID(args.id));
            }
        },
        starship: {
            type: StarshipType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.starship.load(getStarshipByID(args.id));
            }
        },
    })
});

export default new GraphQLSchema({
    query: QueryType,
})