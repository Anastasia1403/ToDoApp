const colorsActionTypes = {
    delete: 'color/delete',
}

export const deleteColorsAction = (payload) => {
    return {
        type: colorsActionTypes.delete,
        payload
    }
}