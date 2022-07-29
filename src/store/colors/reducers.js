import { colorsActionTypes } from "./actions";

const initialState = {}

const colorsReducer = (state = initialState, action) => {

    let newState = {...state};
    switch (action.type) {
        case colorsActionTypes.save:
            newState = action.payload
        return newState;
        case colorsActionTypes.toggle:
            newState[action.payload].isUsed = !newState[action.payload].isUsed
            return newState;
        case colorsActionTypes.replace:
            newState[action.payload.prevColor].isUsed = false
            newState[action.payload.newColor].isUsed = true
            return newState;
        default:
            return state
    }
}

export default colorsReducer;