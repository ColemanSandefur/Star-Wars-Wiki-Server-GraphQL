import apiLoader from "./apiTypes/apiLoader/apiLoader";
import { keyPair, convertToKeyPair } from "./apiTypes/apiLoader/apiLoader";
import { FilmAPI } from "./apiTypes/FilmAPI";
import { PersonAPI } from "./apiTypes/PersonAPI";
import { PlanetAPI } from "./apiTypes/PlanetAPI";
import { SpeciesAPI } from "./apiTypes/SpeciesAPI";
import { StarshipAPI } from "./apiTypes/StarshipAPI";
import { VehicleAPI } from "./apiTypes/VehicleAPI";

export let keys = {
    people: <keyPair<PersonAPI>>{},
    planets: <keyPair<PlanetAPI>>{},
    films: <keyPair<FilmAPI>>{},
    species: <keyPair<SpeciesAPI>>{},
    vehicles: <keyPair<VehicleAPI>>{},
    starships: <keyPair<StarshipAPI>>{},
}

export let arrays = {
    people: <PersonAPI[]>[],
    planets: <PlanetAPI[]>[],
    films: <FilmAPI[]>[],
    species: <SpeciesAPI[]>[],
    vehicles: <VehicleAPI[]>[],
    starships: <StarshipAPI[]>[],
}

export const loadAPI = () => {
    let finished = 0;
    let target = 6;
    const checkFinished = (cb: (x: unknown) => void) => {
        if (++finished == target) {
            cb("");
        }
    }
    return new Promise((res) => {
        apiLoader<PersonAPI>("http://swapi.dev/api/people/").then(data => {
            arrays.people = data;
            keys.people = convertToKeyPair(data);
            checkFinished(res);
        });
        apiLoader<PlanetAPI>("http://swapi.dev/api/planets/").then(data => {
            arrays.planets = data;
            keys.planets = convertToKeyPair(data);
            checkFinished(res);
        });
        apiLoader<FilmAPI>("http://swapi.dev/api/films/").then(data => {
            arrays.films = data;
            keys.films = convertToKeyPair(data);
            checkFinished(res);
        });
        apiLoader<SpeciesAPI>("http://swapi.dev/api/species/").then(data => {
            arrays.species = data;
            keys.species = convertToKeyPair(data);
            checkFinished(res);
        });
        apiLoader<VehicleAPI>("http://swapi.dev/api/vehicles/").then(data => {
            arrays.vehicles = data;
            keys.vehicles = convertToKeyPair(data);
            checkFinished(res);
        });
        apiLoader<StarshipAPI>("http://swapi.dev/api/starships/").then(data => {
            arrays.starships = data;
            keys.starships = convertToKeyPair(data);
            checkFinished(res);
        });;
    });
}