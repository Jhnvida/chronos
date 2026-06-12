export type Task = {
    id: number;
    title: string;
    duration: number;
    active: boolean;
    completed: boolean;
};

export type ListProps = {
    tasks: Task[];
};
