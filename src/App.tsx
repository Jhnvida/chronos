import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { Timer } from "./components/Timer";
import { List } from "./components/List";

import { useState } from "react";
import type { Task } from "./types/global";

export function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (task: Task) => {
        setTasks((prev) => [...prev, task]);
    };

    const handleRemoveTask = (taskId: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
    };

    return (
        <>
            <Navbar />

            <Content>
                <Timer />
                <List tasks={tasks} onTaskAdd={handleAddTask} onTaskRemove={handleRemoveTask} />
            </Content>
        </>
    );
}
