import { AppStoreProvider } from "./store/AppStoreProvider";
import { AsteroidList } from "./components/AsteroidList";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { getNormalizedList } from "./utils/getNormalizedList";
import apiNasaService from "./services/apiNasa";

export default async function Home() {
    // TODO: catch and handle errors
    const asteroidsByDate = await apiNasaService.load();
    const items = getNormalizedList(asteroidsByDate);

    return (
        <div className="app">
            <Header />
            <AppStoreProvider initialState={{ items }}>
                <AsteroidList />
                <Cart />
            </AppStoreProvider>
        </div>
    );
}
