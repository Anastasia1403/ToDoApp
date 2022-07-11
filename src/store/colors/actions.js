const colorsActionTypes = {
    toggle: 'color/toggle',
}
export const toggleColorsAction = (payload) => {
    return {
        type: colorsActionTypes.toggle,
        payload
    }
}