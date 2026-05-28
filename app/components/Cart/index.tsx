"use client";
import { observer } from "mobx-react-lite";

import { useAppStore } from "@/app/store/AppStoreProvider";

import styles from "./styles.module.css";

export const Cart = observer(() => {
    const store = useAppStore();
    const ids = store.cart.allIds;
    // TODO add tooltip with names
    // const names = ids.map((id) => store.cart.byId[id].name).sort();
    const handleSubmit = () => {
        // TODO send cart to server
        console.log(ids);
        store.clearCart();
    };

    return (
        <aside className={styles.cartPanel} aria-label="Корзина">
            {ids.length > 0 && (
                <section className={styles.cartCard}>
                    <div>
                        <h2 className={styles.cartCardTitle}>Корзина</h2>
                        <div className={styles.cartCardCount}>{ids.length} астероида</div>
                    </div>
                    <button onClick={handleSubmit} type="button" className={styles.cartCardSubmit}>
                        Отправить
                    </button>
                </section>
            )}
        </aside>
    );
});
