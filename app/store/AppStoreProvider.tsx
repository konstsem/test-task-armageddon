import { FC, createContext, PropsWithChildren, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { createAppStore, AppStore } from "./createAppStore";

const AppContext = createContext<AppStore | null>(null);

export const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
    const store = useLocalObservable(() => createAppStore());
    return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppStore = () => {
    const store = useContext(AppContext);
    if (!store) throw new Error("Use App store within provider!");
    return store;
};
