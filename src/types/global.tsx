export type Task = {
    id: number;
    title: string;
    duration: number;
    active: boolean;
    completed: boolean;
};

export type ListProps = {
    tasks: Task[];
    currentTask: Task | undefined;
    onTaskAdd: (task: Task) => void;
    onTaskRemove: (taskId: number) => void;
    onTaskComplete: (taskId: number) => void;
    onTaskActive: (taskId: number) => void;
};
