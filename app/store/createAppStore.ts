import { makeAutoObservable } from "mobx";
import { AsteroidItem } from "../types";

export type AppStore = {
    items: AsteroidItem[];
    addItems: (items: AsteroidItem[]) => void;
};

export const createAppStore = () => {
    return makeAutoObservable({
        items: [] as AsteroidItem[],

        addItems(newItems: AsteroidItem[]) {
            this.items.push(...newItems);
        },
    });
};
