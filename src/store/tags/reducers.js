const initialState = {
    1: {
        title: 'work',
        color: '#546556',
    },
    2: {
        title: 'hobby',
        color: '#789521',
    },
    3: {
        title: 'family',
        color: '#721356',
    },
    4: {
        title: 'home',
        color: '#513530',
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