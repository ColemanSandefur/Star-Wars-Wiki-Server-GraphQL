import { json, response } from "express";
import { 
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import fetch from "node-fetch";
import { PersonAPI } from "../PersonAPI";
import { PlanetAPI } from "../PlanetAPI";
import { SpeciesAPI } from "../SpeciesAPI";
import { StarshipAPI } from "../StarshipAPI";
import { VehicleAPI } from "../VehicleAPI";

type AllTypes = (PersonAPI | PlanetAPI | SpeciesAPI | StarshipAPI | VehicleAPI)


interface response<T extends AllTypes> {
    count: number,
    next: string,
    previous: string,
    results: T[]
}

export default function loadAll<T extends AllTypes>(initLink: string) {
    const load = (link: string, results: T[], cb: (data: any) => void) => {
        return fetch(link)
            .then(res => res.json())
            .then(json => {
                let data = <response<T>>json
                console.log(data.next);
                
                data.results.map((dat) => {
                    results.push(dat);
                })

                if (data.next === null) {
                    return cb(results);
                }

                load(data.next, results, cb);
            });
    }

    return new Promise((res) => {
        load(initLink, [], res);
    });
}