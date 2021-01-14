import { FilmAPI } from './FilmAPI';
import { PlanetAPI } from './PlanetAPI';
import { SpeciesAPI } from './SpeciesAPI';
import { StarshipAPI } from './StarshipAPI';
import { VehicleAPI } from './VehicleAPI';

export interface PersonAPI {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     string;
    homeworld:  PlanetAPI;
    films:      FilmAPI[];
    species:    SpeciesAPI[];
    vehicles:   VehicleAPI[];
    starships:  StarshipAPI[];
    created:    string;
    edited:     string;
    url:        string;
}