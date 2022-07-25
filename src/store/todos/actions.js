
export const taskActionTypes = {
    add: 'task/add',
    delete: 'task/delete',
    toggle: 'task/toggle',
    edit: 'task/edit',
    fetch: 'tasks/fetch',
}

export const addTaskAction = (payload) => {
    return { 
       type: taskActionTypes.add,
       payload
    }
}

export const deleteTaskAction = (payload) => {
    return { 
       type: taskActionTypes.delete,
       payload
    }
}

export const toggleTaskAction = (payload) => {
    return { 
       type: taskActionTypes.toggle,
       payload
    }
}
export const editTaskAction = (payload) => {
    return { 
       type: taskActionTypes.edit,
       payload
    }
}

export const fetchTasksAction = (payload) => {
    return { 
       type: taskActionTypes.fetch,
       payload
    }
}