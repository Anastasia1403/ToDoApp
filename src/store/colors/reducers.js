import { colorsActionTypes } from "./actions";

const initialState = {}

const colorsReducer = (state = initialState, action) => {

    let newState = {...state};
    switch (action.type) {
        case colorsActionTypes.fetch:
            newState = action.payload
        return newState;
        case colorsActionTypes.toggle:
            newState[Number(action.payload)].isUsed = !newState[Number(action.payload)].isUsed
            return newState;
        case colorsActionTypes.replace:
            newState[Number(action.payload.prevColor)].isUsed = false
            newState[Number(action.payload.newColor)].isUsed = true
            return newState;
        default:
            return state
    }
}

export default colorsReducer;