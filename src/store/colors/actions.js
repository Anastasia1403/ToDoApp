export const colorsActionTypes = {
    toggle: 'color/toggle',
    replace: 'color/replace',
    save: 'colors/save',
}
export const toggleColorsAction = (payload) => {
    return {
        type: colorsActionTypes.toggle,
        payload
    }
}
export const replaceColorsAction = (payload) => {
    return {
        type: colorsActionTypes.replace,
        payload
    }
}

export const saveColorsAction = (payload) => {
    return {
        type: colorsActionTypes.save,
        payload
    }
}