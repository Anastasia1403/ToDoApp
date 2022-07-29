import { tagActionTypes } from "./actions";

const initialState = {}

const tagsReducer = (state=initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case tagActionTypes.save: 
            newState = action.payload;
            return newState;
        case tagActionTypes.add:
            const id = Number(action.payload.id);
            newState[id] = action.payload
            return newState;
        case tagActionTypes.delete: 
            delete newState[action.payload]
            return newState;
        case tagActionTypes.edit:
            newState[action.payload.id] = action.payload.tag
            return newState;
        default:
            return state            
    }
}

export default tagsReducer;