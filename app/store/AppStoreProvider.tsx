"use client";
import { FC, createContext, PropsWithChildren, useContext, useState } from "react";
import { createAppStore } from "./createAppStore";
import type { AppStore, AppState } from "./createAppStore";

type AppStoreProviderProps = PropsWithChildren<{
    initialState: AppState;
}>;

const AppContext = createContext<AppStore | null>(null);

export const AppStoreProvider: FC<AppStoreProviderProps> = ({ children, initialState }) => {
    const [store] = useState(() => createAppStore(initialState));
    return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppStore = () => {
    const store = useContext(AppContext);
    if (!store) throw new Error("Use App store within provider!");
    return store;
};
