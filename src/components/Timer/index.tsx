import { Play, RefreshCcw } from "lucide-react";
import { Info } from "../Info";
import styles from "./styles.module.css";

function Timer() {
    return (
        <>
            <Info value="Tarefa" />

            <div className={styles.timer}>
                <span>25</span>
                <span>:</span>
                <span>00</span>
            </div>

            <div className={styles.buttons}>
                <button className={styles.button}>
                    <Play />
                </button>
                <button className={`${styles.button} ${styles.reset}`}>
                    <RefreshCcw />
                </button>
            </div>
        </>
    );
}

export { Timer };
