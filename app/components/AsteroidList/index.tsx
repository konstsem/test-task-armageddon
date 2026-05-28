"use client";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.css";
import { AsteroidCard } from "../Asteroid";
import { useAppStore } from "@/app/store/AppStoreProvider";

export const AsteroidList = observer(() => {
    const store = useAppStore();
    const {
        items: { allIds },
        distanceFormat,
    } = store;

    const handleToggleDistanceFormat = (newDistanceFormat: "kilometers" | "lunar") => {
        if (newDistanceFormat !== distanceFormat) {
            store.toggleDistanceFormat();
        }
    };

    return (
        <main className={styles.asteroidsMain} id="main-content">
            <header className={styles.asteroidsMainHeader}>
                <h2 className={styles.asteroidsMainTitle}>Ближайшие подлёты астероидов</h2>

                <div className={styles.unitSwitcher} role="group" aria-label="Единицы измерения расстояния">
                    <button
                        type="button"
                        className={styles.unitSwitcherBtn}
                        aria-pressed={distanceFormat === "kilometers"}
                        onClick={() => handleToggleDistanceFormat("kilometers")}
                    >
                        в километрах
                    </button>
                    <span aria-hidden="true">|</span>
                    <button
                        type="button"
                        className={styles.unitSwitcherBtn}
                        aria-pressed={distanceFormat === "lunar"}
                        onClick={() => handleToggleDistanceFormat("lunar")}
                    >
                        в лунных орбитах
                    </button>
                </div>
            </header>

            <ul className={styles.asteroidList}>
                {allIds.map((id) => (
                    <AsteroidCard key={id} itemId={id} />
                ))}
            </ul>
        </main>
    );
});
