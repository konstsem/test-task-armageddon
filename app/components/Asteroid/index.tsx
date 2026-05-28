"use client";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import Link from "next/link";
import { useAppStore } from "@/app/store/AppStoreProvider";
import { getFormattedKilometers } from "@/app/utils/getFormattedKilometers";
import styles from "./styles.module.css";
import { AsteroidItem } from "@/app/types";

const BIG_MIN_DIAMETER = 100;
const formatDistanceMapper = {
    kilometers: (value: string) => getFormattedKilometers(value) + " км",
    lunar: (value: string) => value + " лунных орбит",
};
export const AsteroidCard = observer(({ itemId }: { itemId: string }) => {
    const store = useAppStore();
    const {
        items: { byId },
        cart: { allIds },
        distanceFormat,
    } = store;
    const item = byId[itemId];
    const isBig = item.diameter > BIG_MIN_DIAMETER;
    const iconWidth = isBig ? 36 : 22;
    const iconHeight = isBig ? 40 : 24;
    const isItemInCart = allIds.includes(itemId);
    const getFormattedDistance = (item: AsteroidItem) => {
        return formatDistanceMapper[distanceFormat](item.close_approach_distance[distanceFormat]);
    };

    const handleAddToCart = () => {
        if (!isItemInCart) {
            store.addToCart({ id: itemId, name: item.name });
        }
    };

    return (
        <li className={styles.asteridCard}>
            <header className={styles.asteroidCardHeader}>12 сент 2023</header>

            <div className={styles.asteroidCardBody}>
                <div className={styles.asteroidCardDistance}>
                    <span className={styles.asteroidCardDistanceValue}>{getFormattedDistance(item)}</span>
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
                    onClick={handleAddToCart}
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
