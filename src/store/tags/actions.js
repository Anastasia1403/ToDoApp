export const tagActionTypes = {
    add: 'tags/add',
    delete: 'tags/delete',
    edit: 'tags/edit',
    save: 'tags/save',
}

export const addTagAction = (payload) => {
    return {
        type: tagActionTypes.add,
        payload
    }
}
export const deleteTagAction = (payload) => {
    return {
        type: tagActionTypes.delete,
        payload
    }
}
export const editTagAction = (payload) => {
    return {
        type: tagActionTypes.edit,
        payload
    }
}

export const saveTagsAction = (payload) => {
    return {
        type: tagActionTypes.save,
        payload
    }
}