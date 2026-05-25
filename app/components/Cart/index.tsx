import styles from "./styles.module.css";

export const Cart = () => {
    return (
        <aside className={styles.cartPanel} aria-label="Корзина">
            {false && (
                <section className={styles.cartCard}>
                    <h2 className={styles.cartCardTitle}>Корзина</h2>
                    <p>2 астероида</p>
                    <button type="button" className={styles.cartCardSubmit}>
                        Отправить
                    </button>
                </section>
            )}
        </aside>
    );
};
