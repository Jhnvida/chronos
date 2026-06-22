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
    const [mode, setMode] = useState<"focus" | "pause">("focus");

    useEffect(() => {
        if (running) return;

        if (mode === "focus") {
            const seconds = (currentTask?.duration ?? 0) * 60;
            setTime(seconds);
        }
    }, [currentTask, mode, running]);

    useEffect(() => {
        if (!running) return;

        if (time === 0) {
            if (mode === "focus") {
                if (currentTask) {
                    onTaskComplete(currentTask.id);
                }

                setMode("pause");
                setTime(5 * 60);
            } else {
                setMode("focus");

                if (currentTask) {
                    setTime(currentTask.duration * 60);
                } else {
                    setTime(0);
                    setRunning(false);
                }
            }

            return;
        }

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [running, time, mode, currentTask, onTaskComplete]);

    function handleRunning() {
        if (mode === "focus" && !currentTask) return;
        setRunning(!running);
    }

    function handleReset() {
        setRunning(false);

        if (mode === "focus") {
            const seconds = (currentTask?.duration ?? 0) * 60;
            setTime(seconds);
        } else {
            setTime(5 * 60);
        }
    }

    function handleModeChange(mode: "focus" | "pause") {
        setMode(mode);
        setRunning(false);

        if (mode === "focus") {
            setTime((currentTask?.duration ?? 0) * 60);
        } else {
            setTime(5 * 60);
        }
    }

    function formatTime(time: number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return (
        <section className={`${styles.container} ${mode === "pause" ? styles.containerPause : ""}`}>
            <div className={styles.modeSelector}>
                <button
                    className={`${styles.modeButton} ${mode === "focus" ? styles.modeActive : ""}`}
                    type="button"
                    onClick={() => handleModeChange("focus")}
                >
                    <Brain size={16} />
                    Foco
                </button>

                <button
                    className={`${styles.modeButton} ${mode === "pause" ? styles.modeActive : ""}`}
                    type="button"
                    onClick={() => handleModeChange("pause")}
                >
                    <Coffee size={16} />
                    Pausa
                </button>
            </div>

            <div className={styles.timeDisplay}>
                <span className={styles.time}>{formatTime(time)}</span>
                <span className={styles.label}>{mode === "focus" ? "Foco na Tarefa" : "Pausa para Descanso"}</span>
            </div>

            <div className={styles.controls}>
                <button type="button" className={styles.playButton} aria-label="Iniciar" onClick={handleRunning}>
                    {running ? (
                        <Pause fill="currentColor" size={32} />
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
