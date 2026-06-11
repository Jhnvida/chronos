import { Plus, Trash2, CheckCircle2, Circle } from "lucide-react";
import styles from "./styles.module.css";

export function List() {
    return (
        <section className={styles.container}>
            <div className={styles.activeBanner}>
                <div>
                    <p className={styles.activeLabel}>Foco Atual</p>
                    <p className={styles.activeText}>Finalizar design do Chronos</p>
                </div>
            </div>

            <div className={styles.listWrapper}>
                <div className={styles.header}>
                    <h3 className={styles.title}>Fila de Tarefas</h3>

                    <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
                        <input type="text" placeholder="Qual o próximo foco?" className={styles.input} />

                        <div className={styles.durationInputWrapper}>
                            <input type="number" defaultValue="25" className={styles.durationInput} min={1} max={60} />
                            <span className={styles.durationUnit}>m</span>
                        </div>

                        <button type="button" className={styles.addButton} aria-label="Adicionar">
                            <Plus size={20} />
                        </button>
                    </form>
                </div>

                <div className={styles.taskList}>
                    <div className={`${styles.taskItem} ${styles.taskItemActive}`}>
                        <button type="button" className={styles.checkButton}>
                            <Circle size={20} />
                        </button>

                        <span className={styles.taskText}>Finalizar design do Chronos</span>

                        <div className={styles.taskActions}>
                            <span className={`${styles.taskDuration} ${styles.taskDurationActive}`}>25m</span>

                            <button type="button" className={styles.deleteButton}>
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.taskItem}>
                        <button type="button" className={styles.checkButton}>
                            <Circle size={20} />
                        </button>

                        <span className={styles.taskText}>Revisar documentação</span>

                        <div className={styles.taskActions}>
                            <span className={styles.taskDuration}>15m</span>

                            <button type="button" className={styles.deleteButton}>
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.taskItem}>
                        <button type="button" className={styles.checkButton}>
                            <CheckCircle2 size={20} color="var(--primary)" />
                        </button>

                        <span className={`${styles.taskText} ${styles.taskTextCompleted}`}>Responder emails</span>

                        <div className={styles.taskActions}>
                            <span className={styles.taskDuration}>10m</span>

                            <button type="button" className={styles.deleteButton}>
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
