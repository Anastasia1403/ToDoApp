const tagActionTypes = {
    add: 'tags/add',
    delete: 'tags/delete',
    edit: 'tags/edit',
}

export const addTagAction = (payload) => {
    return {
        type: tagActionTypes.add,
        payload
    }
}

export const deleteTodoAction = (payload) => {
    return {
        type: tagActionTypes.delete,
        payload
    }
}

export const editTodoAction = (payload) => {
    return {
        type: tagActionTypes.edit,
        payload
    }
}