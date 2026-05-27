import { makeAutoObservable } from "mobx";
import { AsteroidItem } from "../types";

export type AppState = {
    items: {
        byId: Record<string, AsteroidItem>;
        allIds: string[];
    };
};

export type AppStore = AppState & {
    addItems: (items: AsteroidItem[]) => void;
};

export const createAppStore = (initialState: AppState) => {
    return makeAutoObservable<AppStore>({
        items: initialState.items,

        addItems(newItems: AsteroidItem[]) {
            newItems.forEach((item) => {
                this.items.byId[item.id] = item;
            });
            this.items.allIds.push(...newItems.map((item) => item.id));
        },
    });
};
