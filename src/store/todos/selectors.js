export const todosSelector = state => state.todos;
export const currentTodoSelector = id => state => id && Object.values(state.todos).length ? state.todos[id] : {}