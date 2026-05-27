import { Play, RefreshCcw } from "lucide-react";
import styles from "./styles.module.css";

function Timer() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.modes}>
                    <button className={`${styles.modeButton} ${styles.modeActive}`}>Pomodoro</button>
                    <button className={`${styles.modeButton} ${styles.modeInactive}`}>Pausa Curta</button>
                    <button className={`${styles.modeButton} ${styles.modeInactive}`}>Pausa Longa</button>
                </div>

                <div className={styles.timer}>
                    <span>25</span>
                    <span>:</span>
                    <span>00</span>
                </div>

                <div className={styles.controls}>
                    <button className={styles.button}>
                        <Play />
                    </button>
                    <button className={`${styles.button} ${styles.buttonSecondary}`}>
                        <RefreshCcw />
                    </button>
                </div>
            </div>
        </>
    );
}

export { Timer };
