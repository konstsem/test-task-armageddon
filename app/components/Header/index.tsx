import Image from "next/image";
import styles from "./styles.module.css";

export const Header = () => {
    return (
        <>
            <header className={styles.appHeader}>
                <h1 className={styles.appHeaderTitle}>ARMAGEDDON 2023</h1>
                <div>
                    <p className={styles.appHeaderCompany}>ООО «Команда им. Б. Уиллиса».</p>
                    <p className={styles.appHeaderTagline}>Взрываем астероиды с 1998 года.</p>
                </div>
            </header>

            <Image
                className={styles.earthPanelImage}
                src="/earth.jpg"
                alt=""
                loading="eager"
                width={367}
                height={436}
            />
        </>
    );
};
