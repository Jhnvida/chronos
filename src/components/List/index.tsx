import { Plus, Trash2, CheckCircle2, Circle } from "lucide-react";
import styles from "./styles.module.css";

import { useState } from "react";
import type { Task } from "../../types/global";

export type ListProps = {
    tasks: Task[];
    currentTask?: Task;
    onTaskAdd: (task: Task) => void;
    onTaskRemove: (taskId: number) => void;
    onTaskComplete: (taskId: number) => void;
};

export function List({ tasks, currentTask, onTaskAdd, onTaskRemove, onTaskComplete }: ListProps) {
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState(25);

    function handleFormSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            duration: duration,
            completed: false,
        };

        onTaskAdd(newTask);

        setTitle("");
        setDuration(25);
    }

    return (
        <section className={styles.container}>
            <div className={styles.activeBanner}>
                <div>
                    <p className={styles.activeLabel}>Foco Atual</p>
                    <p className={styles.activeText}>{currentTask?.title ?? "Nenhuma tarefa em andamento"}</p>
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
                        <div key={task.id} className={styles.taskItem}>
                            <button
                                type="button"
                                className={styles.checkButton}
                                onClick={() => onTaskComplete(task.id)}
                            >
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
                                <span className={styles.taskDuration}>{task.duration} m</span>

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
