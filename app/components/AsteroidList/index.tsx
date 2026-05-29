"use client";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";

import { useAppStore } from "@/app/store/AppStoreProvider";

import { AsteroidCard } from "../Asteroid";
import styles from "./styles.module.css";

export const AsteroidList = observer(() => {
    const {
        items: { allIds },
        hasMore,
        distanceFormat,
        toggleDistanceFormat,
        loadMore,
    } = useAppStore();
    const mainRef = useRef<HTMLDivElement | null>(null);
    const sentinelRef = useRef<HTMLLIElement | null>(null);
    const handleToggleDistanceFormat = (newDistanceFormat: "kilometers" | "lunar") => {
        if (newDistanceFormat !== distanceFormat) {
            toggleDistanceFormat();
        }
    };

    useEffect(() => {
        const node = sentinelRef.current;
        if (!node || !hasMore) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    loadMore();
                }
            },
            {
                root: mainRef.current,
                rootMargin: "0px 0px 300px 0px", // срабатывает примерно за 2 карточки до конца спискаЖц
                threshold: 0,
            }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [hasMore, loadMore]);

    return (
        <main ref={mainRef} className={styles.asteroidsMain} id="main-content">
            <header className={styles.asteroidsMainHeader}>
                <h2 className={styles.asteroidsMainTitle}>Ближайшие подлёты астероидов</h2>

                <div
                    className={styles.unitSwitcher}
                    role="group"
                    aria-label="Единицы измерения расстояния"
                >
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
                <li ref={sentinelRef} aria-hidden="true" className={styles.sentinelElement} />
            </ul>
        </main>
    );
});
