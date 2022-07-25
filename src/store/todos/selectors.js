export const todosSelector = state => state.todos;
export const currentTodoSelector = id => state => id && Object.values(state.todos).length ? state.todos[id] : {}

export const finishedTodosSelector = state => {
    const result = {}
    for (let i in state.todos) {
        let todo = state.todos[i]
        if (todo.isCompleted) result[i] = todo
    }
    return result
}

export const unfinishedTodosSelector = state => {
    const result = {}
    for (let i in state.todos) {
        let todo = state.todos[i]
        if (!todo.isCompleted) result[i] = todo
    }
    return result
}
