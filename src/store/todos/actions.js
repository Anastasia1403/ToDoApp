const todoActionTypes = {
    add: 'todo/add',
    delete: 'todo/delete',
    toggle: 'todo/toggle'
}

export const addTodoAction = (payload) => {
    return { 
       type: todoActionTypes.add,
       payload
    }
}

export const deleteTodoAction = (payload) => {
    return { 
       type: todoActionTypes.delete,
       payload
    }
}

export const toggleTodoAction = (payload) => {
    return { 
       type: todoActionTypes.toggle,
       payload
    }
}