import fetch from "node-fetch";

const BASE_URL = "http://swapi.dev/api"

export function getPersonByID(id: number) {
    return `${BASE_URL}/people/${id}/`
}

export function getPlanetByID(id: number) {
    return `${BASE_URL}/planets/${id}/`
}

export function getFilmByID(id: number) {
    return `${BASE_URL}/films/${id}/`
}

export function getSpeciesByID(id: number) {
    return `${BASE_URL}/species/${id}/`
}

export function getVehicleByID(id: number) {
    return `${BASE_URL}/vehicles/${id}/`
}

export function getStarshipByID(id: number) {
    return `${BASE_URL}/starships/${id}/`
}

export function getFromURL(fullURL: string) {
    console.log(`loading ${fullURL}`)
    return fetch(`${fullURL}`)
        .then(res => res.json())
}