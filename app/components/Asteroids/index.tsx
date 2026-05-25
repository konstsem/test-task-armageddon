import { useEffect } from "react";
import { useAppStore } from "@/app/store/AppStoreProvider";
import styles from "./styles.module.css";
import { loadItems } from "../../services/apiNasa";
import { normalizeItems } from "../../utils/normalizeItems";

export const Asteroids = () => {
    const store = useAppStore();
    useEffect(() => {
        (async () => {
            try {
                const data = await loadItems();
                const normalized = normalizeItems(data);
                store.addItems(normalized);
            } catch (e) {
                console.error(e);
            }
        })();
    });

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

            <div style={{ paddingTop: "16px" }}>Asteroid list</div>
            <footer className={styles.footer}>© Все права и планета защищены</footer>
        </main>
    );
};
