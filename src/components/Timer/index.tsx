import styles from "./styles.module.css";

function Timer() {
    return (
        <div className={styles.container}>
            <div className={styles.modes}>
                <button className={styles.modeButton}>Pomodoro</button>
                <button className={styles.modeButton}>Pausa Curta</button>
                <button className={styles.modeButton}>Pausa Longa</button>
            </div>

            <div className={styles.clock}>
                <span>25</span>
                <span>:</span>
                <span>00</span>
            </div>

            <div className={styles.controls}>
                <button className={styles.button}>Iniciar</button>
                <button className={styles.buttonSecondary}>Reiniciar</button>
            </div>
        </div>
    );
}

export { Timer };
