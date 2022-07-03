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
