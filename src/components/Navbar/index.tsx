import { HistoryIcon, HomeIcon, SettingsIcon, TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.title}>
                    <TimerIcon size={20} />
                    Chronos
                </div>

                <div className={styles.actions}>
                    <button className={`${styles.button} ${styles.active}`}>
                        <HomeIcon size={20} />
                        <span>Início</span>
                    </button>

                    <button className={styles.button}>
                        <HistoryIcon size={20} />
                        <span>Histórico</span>
                    </button>

                    <button className={styles.button}>
                        <SettingsIcon size={20} />
                        <span>Configurações</span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export { Navbar };
