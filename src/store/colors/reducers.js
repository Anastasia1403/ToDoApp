const initialState = {
    1: {
        color: '#df6575',
        isUsed: true
    },
    2: {
        color: '#fab655',
        isUsed: true
    },
    3: {
        color: '#435675',
        isUsed: true
    },
    4: {
        color: '#4596c5',
        isUsed: true
    },
    5: {
        color: '#cf3f14',
        isUsed: false
    },
    6: {
        color: '#6de03d',
        isUsed: false
    },
    7: {
        color: '#379a1b',
        isUsed: false
    },
    8: {
        color: '#bc0573',
        isUsed: false
    },
    9: {
        color: '#7e4699',
        isUsed: false
    },
    10: {
        color: '#124385',
        isUsed: false
    },
}

const colorsReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'color/toggle':
            newState[action.payload].isUsed = !newState[action.payload].isUsed
            return newState;
        default:
            return state
    }
}

export default colorsReducer;