export const tagsSelector = state => state.tags
export const tagsByIdSelector = idArray => state => idArray && idArray.length ? idArray.map(id => state.tags[id]) : []
export const tagsOptionsSelector = state => Object.entries(state.tags)
.map(([id, tag]) => {
    return {value: id, label: tag.title}    
})