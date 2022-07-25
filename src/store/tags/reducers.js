import { tagActionTypes } from "./actions";

const initialState = {}

const tagsReducer = (state=initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case tagActionTypes.fetch: 
            newState = action.payload;
            return newState;
        case tagActionTypes.add:
            const id = +action.payload.id;
            newState[id] = action.payload
            return newState;
        case tagActionTypes.delete: {
            delete newState[Number(action.payload)]
            return newState;
        }
        case tagActionTypes.edit:
            newState[action.payload.id] = action.payload
            return newState;
        default:
            return state            
    }
}

export default tagsReducer;