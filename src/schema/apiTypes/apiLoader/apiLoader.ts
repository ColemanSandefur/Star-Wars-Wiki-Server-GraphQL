import fetch from "node-fetch";
import { FilmAPI } from "../FilmAPI";
import { PersonAPI } from "../PersonAPI";
import { PlanetAPI } from "../PlanetAPI";
import { SpeciesAPI } from "../SpeciesAPI";
import { StarshipAPI } from "../StarshipAPI";
import { VehicleAPI } from "../VehicleAPI";

export type AllTypes = (PersonAPI | PlanetAPI | SpeciesAPI | StarshipAPI | VehicleAPI | FilmAPI)

interface response<T extends AllTypes> {
    count: number,
    next: string,
    previous: string,
    results: T[]
}

export interface keyPair<T extends AllTypes> {
    [key: number]: T;
}

export function getIdFromLink(link: string) {
    return <number><any>link.match("\\d+")?.toString();
}

export default function loadAll<T extends AllTypes>(initLink: string): Promise<T[]> {
    const load = (link: string, results: T[], cb: (data: T[]) => void) => {
        return fetch(link)
            .then(res => res.json())
            .then(json => {
                let data = <response<T>>json
                
                data.results.map((dat) => {
                    results.push(dat);
                })

                if (data.next === null) {
                    return cb(results);
                }

                load(data.next, results, cb);
            });
    }

    console.log(`Loading: ${initLink}`);

    return new Promise((res) => {
        load(initLink, [], res);
    });
}

export function convertToKeyPair<T extends AllTypes>(arr: T[]): keyPair<T> {
    let pair: keyPair<T> = {};

    arr.map((data) => {
        pair[getIdFromLink(data.url)] = data;
    });

    return pair;
}