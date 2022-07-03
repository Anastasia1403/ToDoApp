export const colorsSelector = state => state.colors
export const colorsOptionsSelector = state => Object.entries(state.colors).map(([id, color]) => {
    return {value: id, label: color.color}
})