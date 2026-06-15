import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { Timer } from "./components/Timer";
import { List } from "./components/List";

import { useState } from "react";
import type { Task } from "./types/global";

export function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const currentTask = tasks.find((task) => task.active && !task.completed);

    function handleAddTask(task: Task) {
        setTasks((prev) => [...prev, task]);
    }

    function handleRemoveTask(taskId: number) {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
    }

    function handleCompleteTask(taskId: number) {
        setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
    }

    function handleActivateTask(taskId: number) {
        setTasks((prev) => prev.map((task) => ({ ...task, active: task.id === taskId })));
    }

    return (
        <>
            <Navbar />

            <Content>
                <Timer />

                <List
                    tasks={tasks}
                    currentTask={currentTask}
                    onTaskAdd={handleAddTask}
                    onTaskRemove={handleRemoveTask}
                    onTaskComplete={handleCompleteTask}
                    onTaskActive={handleActivateTask}
                />
            </Content>
        </>
    );
}
