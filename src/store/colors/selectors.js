export const colorsSelector = state => state.colors
export const colorsOptionsSelector = currentColor => state => Object.entries(state.colors)
.filter(([id, color]) => color.isUsed === false || Number(id) === currentColor)
.map(([id, color]) => {
    return {value: Number(id), label: color.color}    
})