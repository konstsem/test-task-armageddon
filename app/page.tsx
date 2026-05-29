import { addDays } from "date-fns";

import { AsteroidList } from "./components/AsteroidList";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import apiNasaService from "./services/apiNasa";
import { AppStoreProvider } from "./store/AppStoreProvider";
import { AsteroidItem } from "./types";
import { getNormalizedData } from "./utils/getNormalizedData";
import { getUTCDateString } from "./utils/getUtcDateString";

export default async function Home() {
    let items = { byId: {}, allIds: [] } as {
        byId: Record<string, AsteroidItem>;
        allIds: string[];
    };

    const startDate = getUTCDateString(new Date());
    const endDate = getUTCDateString(addDays(new Date(), 7));
    let nextStartDate: string = startDate;

    try {
        const asteroidsByDate = await apiNasaService.load(startDate, endDate);
        items = getNormalizedData(asteroidsByDate);
        nextStartDate = getUTCDateString(addDays(new Date(), 8));
    } catch (err) {
        console.error(err);
    }

    return (
        <div className="app">
            <Header />
            <AppStoreProvider initialState={{ items, nextStartDate }}>
                <AsteroidList />
                <Cart />
            </AppStoreProvider>
            <footer className="footer">© Все права и планета защищены</footer>
        </div>
    );
}
