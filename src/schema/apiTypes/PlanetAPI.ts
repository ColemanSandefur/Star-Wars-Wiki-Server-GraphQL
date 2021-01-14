import { FilmAPI } from "./FilmAPI";
import { PersonAPI } from "./PersonAPI";

export interface PlanetAPI {
    name:            string;
    rotation_period: string;
    orbital_period:  string;
    diameter:        string;
    climate:         string;
    gravity:         string;
    terrain:         string;
    surface_water:   string;
    population:      string;
    residents:       PersonAPI[];
    films:           FilmAPI[];
    created:         string;
    edited:          string;
    url:             string;
}