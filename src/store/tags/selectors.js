export const tagsSelector = state => state.tags
export const tagsArrayByIdSelector = idArray => state => idArray && idArray.length ? idArray.map(id => state.tags[Number(id)]) : []
export const tagsOptionsSelector = state => Object.entries(state.tags)
.map(([id, tag]) => {
    return {value: Number(id), label: tag.title}    
});
export const tagByIdSelector = id => state => state.tags[Number(id)]