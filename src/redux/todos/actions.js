import { ADDTODO, COLORSELECTED, MAKETOGGLE, REMOVETODO } from "./actionTypes"

export const addTodo = (todo) => {
    return {
        type: ADDTODO,
        payload: todo
    }
}

export const removeTodo = (todoId) => {
    return {
        type: REMOVETODO,
        payload: todoId
    }
}

export const makeToggle = (todoId) => {
    return {
        type: MAKETOGGLE,
        payload: todoId
    }
}

export const colorSelect = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}