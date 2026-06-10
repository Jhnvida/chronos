import { Trash } from "lucide-react";
import styles from "./styles.module.css";

export function List() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Lista de Tarefas</h2>

            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder="Qual o próximo foco?" />

                <div className={styles.inputGroup}>
                    <input
                        className={`${styles.input} ${styles.inputSmall}`}
                        type="number"
                        min={1}
                        max={60}
                        defaultValue={15}
                    />
                    <span className={styles.minutesLabel}>min</span>
                </div>

                <button className={styles.buttonSubmit} type="submit">
                    Adicionar
                </button>
            </form>

            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <div className={styles.taskInfo}>
                        <button className={styles.buttonCheck} type="button" />
                        <span className={styles.taskTitle}>Tarefa 1</span>
                    </div>

                    <div className={styles.taskActions}>
                        <span className={styles.taskDuration}>15 min</span>
                        <button className={styles.buttonDelete} type="button">
                            <Trash size={20} color="var(--danger)" />
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    );
}
