export const colorsSelector = state => state.colors
export const colorsOptionsSelector = currentColor => state => Object.entries(state.colors)
.filter(([id, color]) => color.isUsed === false || Number(id) === currentColor)
.map(([id, color]) => {
    return {value: id, label: color.color}    
})

// export const colorIdByColorSelector = tagColor => state => {
//     Object.entries(state.colors)
//     .find(([id, color]) => {
//         return color.color === tagColor
//     }
// )}