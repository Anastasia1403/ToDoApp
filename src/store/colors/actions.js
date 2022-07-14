const colorsActionTypes = {
    toggle: 'color/toggle',
    replace: 'color/replace',
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