import { combineReducers, createStore } from 'redux';
import colorsReducer from './colors/reducers';
import tagsReducer from './tags/reducers';
import todoReducer from './todos/reducers';

let store = createStore(combineReducers({
        todos: todoReducer,
        tags: tagsReducer,
        colors: colorsReducer,
    }), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store