import { PersonAPI } from "./PersonAPI";
import { PlanetAPI } from "./PlanetAPI";
import { SpeciesAPI } from "./SpeciesAPI";
import { StarshipAPI } from "./StarshipAPI";
import { VehicleAPI } from "./VehicleAPI";

export interface FilmAPI {
    title:         string;
    episode_id:    number;
    opening_crawl: string;
    director:      string;
    producer:      string;
    release_date:  string;
    characters:    PersonAPI[];
    planets:       PlanetAPI[];
    starships:     StarshipAPI[];
    vehicles:      VehicleAPI[];
    species:       SpeciesAPI[];
    created:       string;
    edited:        string;
    url:           string;
}