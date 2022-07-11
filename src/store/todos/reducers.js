const initialState = {}

const todoReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'todo/add':
            const id = Date.now();
            newState[id] = {
                title: action.payload.title,
                description: action.payload.description,
                isCompleted: false,
                tags: action.payload.tags,
            }
            return newState
        case 'todo/delete':
            delete newState[action.payload]
            return newState
        case 'todo/toggle':
            newState[action.payload].isCompleted = !newState[action.payload].isCompleted
            return newState
        case 'todo/edit':
            newState[action.payload.id] = {
                title: action.payload.title || newState[action.payload.id].title,
                description: action.payload.description || newState[action.payload.id].description,
                isCompleted: action.payload.hasOwnProperty('isCompleted') ? action.payload.isCompleted : newState[action.payload.id].isCompleted,
                tags: action.payload.tags || newState[action.payload.id].description,
            }
            return newState
        default:
            return state
    }
}

export default todoReducer;