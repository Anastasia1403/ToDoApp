import { applyMiddleware, combineReducers, createStore } from 'redux';
import colorsReducer from './colors/reducers';
import tagsReducer from './tags/reducers';
import todoReducer from './todos/reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from'redux-devtools-extension'

let store = createStore(combineReducers({
        todos: todoReducer,
        tags: tagsReducer,
        colors: colorsReducer,
    }), 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store