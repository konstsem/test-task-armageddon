"use client";

import { AppStoreProvider } from "./store/AppStoreProvider";
import { Asteroids } from "./components/Asteroids";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";

export default function Home() {
    return (
        <div className="app">
            <Header />
            <AppStoreProvider>
                <Asteroids />
                <Cart />
            </AppStoreProvider>
        </div>
    );
}
