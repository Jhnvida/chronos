import { Play, RotateCcw, Brain, Coffee } from "lucide-react";
import styles from "./styles.module.css";

export function Timer() {
    return (
        <section className={styles.container}>
            <div className={styles.modeSelector}>
                <button className={`${styles.modeButton} ${styles.modeActive}`} type="button">
                    <Brain size={16} />
                    Foco
                </button>

                <button className={styles.modeButton} type="button">
                    <Coffee size={16} />
                    Pausa
                </button>
            </div>

            <div className={styles.timeDisplay}>
                <span className={styles.time}>25:00</span>
                <span className={styles.label}>Foco na Tarefa</span>
            </div>

            <div className={styles.controls}>
                <button type="button" className={styles.playButton} aria-label="Iniciar">
                    <Play fill="currentColor" size={32} style={{ marginLeft: "4px" }} />
                </button>

                <button type="button" className={styles.resetButton} aria-label="Reiniciar">
                    <RotateCcw size={24} />
                </button>
            </div>
        </section>
    );
}
