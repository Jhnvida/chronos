import { Plus, Trash2, CheckCircle2, Circle } from "lucide-react";
import styles from "./styles.module.css";

import { useState } from "react";
import type { ListProps } from "../../types/global";

export function List({ tasks, onTaskAdd, onTaskRemove }: ListProps) {
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState(25);

    const handleFormSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            duration: duration,
            active: false,
            completed: false,
        };

        onTaskAdd(newTask);

        setTitle("");
        setDuration(25);
    };

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

                    <form className={styles.form} onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            placeholder="Qual o próximo foco?"
                            className={styles.input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <div className={styles.durationInputWrapper}>
                            <input
                                type="number"
                                defaultValue="25"
                                className={styles.durationInput}
                                min={1}
                                max={60}
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                            />
                            <span className={styles.durationUnit}>m</span>
                        </div>

                        <button type="submit" className={styles.addButton} aria-label="Adicionar">
                            <Plus size={20} />
                        </button>
                    </form>
                </div>

                <div className={styles.taskList}>
                    {tasks.map((task) => (
                        <div key={task.id} className={`${styles.taskItem} ${task.active ? styles.taskItemActive : ""}`}>
                            <button type="button" className={styles.checkButton}>
                                {task.completed ? (
                                    <CheckCircle2 size={20} color="var(--primary)" />
                                ) : (
                                    <Circle size={20} />
                                )}
                            </button>

                            <span className={`${styles.taskText} ${task.completed ? styles.taskTextCompleted : ""}`}>
                                {task.title}
                            </span>

                            <div className={styles.taskActions}>
                                <span
                                    className={`${styles.taskDuration} ${task.active ? styles.taskDurationActive : ""}`}
                                >
                                    {task.duration} m
                                </span>

                                <button
                                    type="button"
                                    className={styles.deleteButton}
                                    onClick={() => onTaskRemove(task.id)}
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
