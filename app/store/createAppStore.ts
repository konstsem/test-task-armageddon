import { makeAutoObservable } from "mobx";
import { AsteroidItem } from "../types";

export type AppState = {
    items: AsteroidItem[];
};

export type AppStore = AppState & {
    addItems: (items: AsteroidItem[]) => void;
};

export const createAppStore = (initialState: AppState) => {
    return makeAutoObservable<AppStore>({
        items: initialState.items,

        addItems(newItems: AsteroidItem[]) {
            this.items.push(...newItems);
        },
    });
};
