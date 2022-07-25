export const colorsActionTypes = {
    toggle: 'color/toggle',
    replace: 'color/replace',
    fetch: 'colors/fetch',
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

export const fetchColorsAction = (payload) => {
    return {
        type: colorsActionTypes.fetch,
        payload
    }
}