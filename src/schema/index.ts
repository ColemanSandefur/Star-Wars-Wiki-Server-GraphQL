import { 
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import PersonType from "./PersonType"
import PlanetType from "./PlanetType"

import { getFilmByID, getPersonByID, getPlanetByID, getSpeciesByID, getStarshipByID, getVehicleByID } from "./helper";
import FilmType from "./FilmType";
import SpeciesType from "./SpeciesType";
import VehicleType from "./VehicleType";
import StarshipType from "./StarshipType";

const QueryType = new GraphQLObjectType({
    name: "Query", 
    description: "...",

    fields: () => ({
        person: {
            type: PersonType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.person.load(getPersonByID(args.id));
            }
        },
        planet: {
            type: PlanetType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.planet.load(getPlanetByID(args.id));
            }
        },
        film: {
            type: FilmType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.film.load(getFilmByID(args.id));
            }
        }, 
        species: {
            type: SpeciesType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.species.load(getSpeciesByID(args.id));
            }
        },
        vehicle: {
            type: VehicleType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.vehicle.load(getVehicleByID(args.id));
            }
        },
        starship: {
            type: StarshipType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (root, args, {loaders}) => {
                return loaders.starship.load(getStarshipByID(args.id));
            }
        }
    })
});

export default new GraphQLSchema({
    query: QueryType,
})