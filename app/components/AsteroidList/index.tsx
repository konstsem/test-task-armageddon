"use client";
import styles from "./styles.module.css";
import { AsteroidCard } from "../Asteroid";
import { useAppStore } from "@/app/store/AppStoreProvider";

export const AsteroidList = () => {
    const {
        items: { allIds },
    } = useAppStore();

    return (
        <main className={styles.asteroidsMain} id="main-content">
            <header className={styles.asteroidsMainHeader}>
                <h2 className={styles.asteroidsMainTitle}>Ближайшие подлёты астероидов</h2>

                <div className={styles.unitSwitcher} role="group" aria-label="Единицы измерения расстояния">
                    <button type="button" className={styles.unitSwitcherBtn} aria-pressed="true">
                        в километрах
                    </button>
                    <span aria-hidden="true">|</span>
                    <button type="button" className={styles.unitSwitcherBtn} aria-pressed="false">
                        в лунных орбитах
                    </button>
                </div>
            </header>

            <ul className={styles.asteroidList}>
                {allIds.map((id) => (
                    <AsteroidCard key={id} itemId={id} />
                ))}
            </ul>
            <footer className={styles.footer}>© Все права и планета защищены</footer>
        </main>
    );
};
