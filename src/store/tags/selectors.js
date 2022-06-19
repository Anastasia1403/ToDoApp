export const tagsSelector = state => state.tags
export const tagsByIdSelector = idArray => state => idArray && idArray.length ? idArray.map(id => state.tags[id]) : []