import { AllTypes, keyPair, getIdFromLink } from "./apiTypes/apiLoader/apiLoader";

export function loadAll<T extends AllTypes>(links: string[], keys: keyPair<T>) {
    return links.map((value) => {
        if (value === null) {
            return;
        }
        return keys[getIdFromLink(value)]
    });
}