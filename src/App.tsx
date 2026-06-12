import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { Timer } from "./components/Timer";
import { List } from "./components/List";

import { useState } from "react";
import type { Task } from "./types/global";

export function App() {
    const testTasks: Task[] = [
        { id: 1, title: "Tarefa 1", duration: 10, active: false, completed: true },
        { id: 2, title: "Tarefa 2", duration: 15, active: false, completed: true },
        { id: 3, title: "Tarefa 3", duration: 25, active: true, completed: false },
    ];
    const [tasks, setTasks] = useState<Task[]>(testTasks);

    return (
        <>
            <Navbar />

            <Content>
                <Timer />
                <List tasks={tasks} />
            </Content>
        </>
    );
}
