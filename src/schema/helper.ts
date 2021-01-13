import fetch from "node-fetch";

const BASE_URL = "http://swapi.dev/api"

export function getPersonByID(id: number) {
    return fetch(`${BASE_URL}/people/${id}`)
        .then(res => res.json());
}

export function getPlanetByID(id: number) {
    return fetch(`${BASE_URL}/planets/${id}/`)
        .then(res => res.json());
}

export function getFromURL(fullURL: string) {
    return fetch(`${fullURL}`)
        .then(res => res.json())
}