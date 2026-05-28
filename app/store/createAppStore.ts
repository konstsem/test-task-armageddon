import { makeAutoObservable } from "mobx";
import { AsteroidItem } from "../types";

export type AppState = {
    items: {
        byId: Record<string, AsteroidItem>;
        allIds: string[];
    };
};

export type AppStore = AppState & {
    cart: { byId: Record<string, { id: string; name: string }>; allIds: string[] };
    addItems: (items: AsteroidItem[]) => void;
    addToCart: ({ id, name }: { id: string; name: string }) => void;
    clearCart: () => void;
};

export const createAppStore = (initialState: AppState) => {
    return makeAutoObservable<AppStore>({
        items: initialState.items,
        cart: { byId: {}, allIds: [] },

        addItems(newItems: AsteroidItem[]) {
            newItems.forEach((item) => {
                this.items.byId[item.id] = item;
            });
            this.items.allIds.push(...newItems.map((item) => item.id));
        },
        addToCart({ id, name }: { id: string; name: string }) {
            this.cart.allIds.push(id);
            this.cart.byId[id] = { id, name };
        },
        clearCart() {
            this.cart = { byId: {}, allIds: [] };
        },
    });
};
