import { FilmAPI } from "./FilmAPI";
import { PersonAPI } from "./PersonAPI";
import { PlanetAPI } from "./PlanetAPI";

export interface SpeciesAPI {
    name:             string;
    classification:   string;
    designation:      string;
    average_height:   string;
    skin_colors:      string;
    hair_colors:      string;
    eye_colors:       string;
    average_lifespan: string;
    homeworld:        PlanetAPI;
    language:         string;
    people:           PersonAPI[];
    films:            FilmAPI[];
    created:          string;
    edited:           string;
    url:              string;
}
