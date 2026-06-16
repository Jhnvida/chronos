import { Play, RotateCcw, Brain, Coffee, Pause } from "lucide-react";
import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import type { Task } from "../../types/global";

type TimerProps = {
    currentTask?: Task;
    onTaskComplete: (taskId: number) => void;
};

export function Timer({ currentTask, onTaskComplete }: TimerProps) {
    const [time, setTime] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);

    useEffect(() => {
        const seconds = (currentTask?.duration ?? 0) * 60;

        setTime(seconds);
        setRunning(false);
    }, [currentTask]);

    useEffect(() => {
        if (!running) return;

        if (time === 0) {
            setRunning(false);
            onTaskComplete(currentTask?.id ?? 0);

            return;
        }

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [running, time]);

    function handleRunning() {
        setRunning(!running);
    }

    function handleReset() {
        const seconds = (currentTask?.duration ?? 0) * 60;

        setTime(seconds);
        setRunning(false);
    }

    function formatTime(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

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
                <span className={styles.time}>{formatTime(time)}</span>
                <span className={styles.label}>Foco na Tarefa</span>
            </div>

            <div className={styles.controls}>
                <button type="button" className={styles.playButton} aria-label="Iniciar" onClick={handleRunning}>
                    {running ? (
                        <Pause fill="currentColor" size={32} style={{ marginLeft: "4px" }} />
                    ) : (
                        <Play fill="currentColor" size={32} style={{ marginLeft: "4px" }} />
                    )}
                </button>

                <button type="button" className={styles.resetButton} aria-label="Reiniciar" onClick={handleReset}>
                    <RotateCcw size={24} />
                </button>
            </div>
        </section>
    );
}
