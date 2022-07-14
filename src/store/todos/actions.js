const todoActionTypes = {
    add: 'todo/add',
    delete: 'todo/delete',
    toggle: 'todo/toggle',
    edit: 'todo/edit',
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
export const editTodoAction = (payload) => {
    return { 
       type: todoActionTypes.edit,
       payload
    }
}