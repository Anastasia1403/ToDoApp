const initialState = {
    1: {
        title: 'work',
        color: '#df6575',
    },
    2: {
        title: 'hobby',
        color: '#fab655',
    },
    3: {
        title: 'family',
        color: '#435675',
    },
    4: {
        title: 'home',
        color: '#4596c5',
    }
    
}

const tagsReducer = (state=initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'tags/add':
            const id = Date.now();
            newState[id] = {
                title: action.payload.title,
                color: action.payload.color,
            }
            return newState;
        default:
            return state            
    }
}

export default tagsReducer;