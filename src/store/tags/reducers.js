const initialState = {
    1: {
        title: 'work',
        color: 1,
    },
    2: {
        title: 'hobby',
        color: 2,
    },
    3: {
        title: 'family',
        color: 3,
    },
    4: {
        title: 'home',
        color: 4,
    }
    
}

const tagsReducer = (state=initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'tags/add':
            const id = Date.now();
            newState[id] = {
                title: action.payload.title,
                color: Number(action.payload.colorId),
            }
            return newState;
        case 'tags/delete': {
            delete newState[action.payload]
            return newState;
        }
        case 'tags/edit':
            newState[action.payload.id] = {
                title: action.payload.title,
                color: Number(action.payload.colorId),
            }
            return newState;
        default:
            return state            
    }
}

export default tagsReducer;