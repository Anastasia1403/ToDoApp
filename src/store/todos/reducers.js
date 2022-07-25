import { taskActionTypes } from "./actions";

const initialState = {}

const todoReducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case taskActionTypes.fetch:
        newState = action.payload;
        return newState
        case taskActionTypes.add:
            const id = action.payload.id;
            newState[id] = action.payload
            return newState
        case taskActionTypes.delete:
            delete newState[+action.payload]
            return newState
        case taskActionTypes.edit:
            newState[+action.payload.id] = action.payload
            return newState
        default:
            return state
    }
}

export default todoReducer;