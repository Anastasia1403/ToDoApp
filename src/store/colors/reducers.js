const initialState = {
    1: {
        color: '#cf3f14',
    },
    2: {
        color: '#6de03d',
    },
    3: {
        color: '#379a1b'
    },
    4: {
        color: '#bc0573'
    },
    5: {
        color: '#7e4699'
    },
    6: {
        color: '#124385'
    }    
}

const colorsReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'color/delete':
            delete newState[action.payload]
            return newState
        default:
            return state
    }
}

export default colorsReducer;