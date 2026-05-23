import styles from "./styles.module.css";

export const Asteroids = () => {
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
        </main>
    );
};
