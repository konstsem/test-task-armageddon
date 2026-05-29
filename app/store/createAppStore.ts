import { addDays } from "date-fns";
import { makeAutoObservable } from "mobx";

import apiNasaService from "../services/apiNasa";
import { AsteroidItem } from "../types";
import { getNormalizedData } from "../utils/getNormalizedData";
import { getUTCDateString } from "../utils/getUtcDateString";

export type AppState = {
    items: {
        byId: Record<string, AsteroidItem>;
        allIds: string[];
    };
    nextStartDate: string;
};

export type AppStore = AppState & {
    cart: { byId: Record<string, { id: string; name: string }>; allIds: string[] };
    distanceFormat: "kilometers" | "lunar";
    isLoading: boolean;
    hasMore: boolean;
    addItems: (items: { byId: Record<string, AsteroidItem>; allIds: string[] }) => void;
    addToCart: ({ id, name }: { id: string; name: string }) => void;
    clearCart: () => void;
    toggleDistanceFormat: () => void;
    finishLoadingSuccess: (
        items: { byId: Record<string, AsteroidItem>; allIds: string[] },
        nextStartDate: string
    ) => void;
    finishLoadingError: () => void;
    finishLoadingNoMore: () => void;
    loadMore: () => void;
};

export const createAppStore = (initialState: AppState) => {
    return makeAutoObservable<AppStore>(
        {
            items: initialState.items,
            nextStartDate: initialState.nextStartDate,
            isLoading: false,
            hasMore: true,
            cart: { byId: {}, allIds: [] },
            distanceFormat: "kilometers" as const,

            addItems(newItems: { byId: Record<string, AsteroidItem>; allIds: string[] }) {
                this.items.byId = { ...this.items.byId, ...newItems.byId };
                this.items.allIds = [...this.items.allIds, ...newItems.allIds];
            },
            addToCart({ id, name }: { id: string; name: string }) {
                this.cart.allIds.push(id);
                this.cart.byId[id] = { id, name };
            },
            clearCart() {
                this.cart = { byId: {}, allIds: [] };
            },
            toggleDistanceFormat() {
                this.distanceFormat =
                    this.distanceFormat === "kilometers"
                        ? ("lunar" as const)
                        : ("kilometers" as const);
            },

            finishLoadingSuccess(
                items: { byId: Record<string, AsteroidItem>; allIds: string[] },
                nextStartDate: string
            ) {
                this.addItems(items);
                this.isLoading = false;
                this.nextStartDate = nextStartDate;
            },

            finishLoadingError() {
                this.isLoading = false;
            },
            finishLoadingNoMore() {
                this.isLoading = false;
                this.hasMore = false;
            },
            async loadMore() {
                if (this.isLoading || !this.hasMore) return;
                this.isLoading = true;

                try {
                    const startDate = this.nextStartDate;
                    const endDate = getUTCDateString(
                        addDays(new Date(`${startDate}T00:00:00Z`), 7)
                    );
                    const nextStartDate = getUTCDateString(
                        addDays(new Date(`${endDate}T00:00:00Z`), 1)
                    );
                    const data = await apiNasaService.load(startDate, endDate);
                    const normalizedData = getNormalizedData(data);

                    if (normalizedData.allIds.length === 0) {
                        this.finishLoadingNoMore();
                        return;
                    }

                    this.finishLoadingSuccess(normalizedData, nextStartDate);
                } catch {
                    // TODO: handle error
                    this.finishLoadingError();
                }
            },
        },
        {},
        { autoBind: true }
    );
};
