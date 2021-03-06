import { FilmAPI } from "./FilmAPI";
import { PersonAPI } from "./PersonAPI";

export interface VehicleAPI {
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    vehicle_class:          string;
    pilots:                 PersonAPI[];
    films:                  FilmAPI[];
    created:                string;
    edited:                 string;
    url:                    string;
}
