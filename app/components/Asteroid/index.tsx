"use client";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import Link from "next/link";
import { useAppStore } from "@/app/store/AppStoreProvider";
import { getFormattedKilometers } from "@/app/utils/getFormattedKilometers";
import styles from "./styles.module.css";

const BIG_MIN_DIAMETER = 100;

export const AsteroidCard = observer(({ itemId }: { itemId: string }) => {
    const {
        items: { byId },
    } = useAppStore();
    const item = byId[itemId];
    const isBig = item.diameter > BIG_MIN_DIAMETER;
    const iconWidth = isBig ? 36 : 22;
    const iconHeight = isBig ? 40 : 24;
    const isItemInCart = false;

    return (
        <li className={styles.asteridCard}>
            <header className={styles.asteroidCardHeader}>12 сент 2023</header>

            <div className={styles.asteroidCardBody}>
                <div className={styles.asteroidCardDistance}>
                    <span className={styles.asteroidCardDistanceValue}>
                        {getFormattedKilometers(item.close_approach_distance.kilometers)} км
                    </span>
                    <span className={styles.asteroidCardDistanceLine} aria-hidden="true"></span>
                </div>

                <Image src="/asteroid.svg" alt="asteroid icon" width={iconWidth} height={iconHeight} />

                <div className={styles.asteroidCardInfo}>
                    <Link className={styles.asteroidCardName} href="#">
                        {item.name}
                    </Link>
                    <span className={styles.asteroidCardDiameter}>Ø {item.diameter} м</span>
                </div>
            </div>

            <footer className={styles.asteroidCardFooter}>
                <button
                    type="button"
                    className={clsx(styles.baseOrderBtn, isItemInCart ? styles.inCartBtn : styles.toCartBtn)}
                >
                    {isItemInCart ? "В КОРЗИНЕ" : "ЗАКАЗАТЬ"}
                </button>
                {item.is_potentially_hazardous_asteroid ? (
                    <div className={styles.asteroidCardDanger}>
                        <span aria-hidden="true">⚠️</span>
                        <span>Опасен</span>
                    </div>
                ) : null}
            </footer>
        </li>
    );
});
