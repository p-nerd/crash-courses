import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { fetchTodos } from "../requests/todoRequests";

export type TTodo = {
    title: string;
    completed: boolean;
    id: number;
};

interface ITodoStore {
    todos: TTodo[];
    loadTodos: () => void;
    addTodo: (todo: TTodo) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, title: string) => void;
    toggleTodo: (id: number) => void;
}

const useTodoStore = create<ITodoStore>()(
    devtools(
        persist(
            set => ({
                todos: [],
                loadTodos: async () => {
                    const todos = await fetchTodos();
                    set({ todos });
                },
                addTodo: todo => {
                    set(state => ({
                        todos: [...state.todos, todo],
                    }));
                },
                deleteTodo: id => {
                    set(state => ({
                        todos: state.todos.filter(todo => todo.id !== id),
                    }));
                },
                editTodo: (id, title) => {
                    set(state => ({
                        todos: state.todos.map(todo =>
                            todo.id === id ? { ...todo, title: title } : todo,
                        ),
                    }));
                },
                toggleTodo: id => {
                    set(state => ({
                        todos: state.todos.map(todo =>
                            todo.id === id
                                ? { ...todo, completed: !todo.completed }
                                : todo,
                        ),
                    }));
                },
            }),
            { name: "todos" },
        ),
    ),
);
export default useTodoStore;
