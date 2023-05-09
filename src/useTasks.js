import { useState, useEffect } from "react";

export const useTasks = () => {
    const getInitialTask = () => {
        const tasksLocalStorage = localStorage.getItem("tasks");
        if (tasksLocalStorage === null) {
            return [];
        }
        return JSON.parse(localStorage.getItem("tasks"));
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };
    const [tasks, setTasks] = useState(getInitialTask, removeTask, toggleTaskDone, setAllDone, addNewTask);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return {tasks, removeTask, toggleTaskDone, setAllDone, addNewTask};
};