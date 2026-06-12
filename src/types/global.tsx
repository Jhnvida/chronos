export type Task = {
    id: number;
    title: string;
    duration: number;
    active: boolean;
    completed: boolean;
};

export type ListProps = {
    tasks: Task[];
    onTaskAdd: (task: Task) => void;
    onTaskRemove: (taskId: number) => void;
};
