/// <reference types="vite/client" />

type TodoItemType = {
    title: string;
    isCompleted: boolean;
    id: string;
}

type PropsType = {
    todo: TodoItemType;
    deleteHandler:(id: TodoItemType["id"]) => void;
    completeHandler:(id: TodoItemType["id"]) => void;
    editHandler:(id: TodoItemType["id"], title: TodoItemType["title"]) => void;
};
