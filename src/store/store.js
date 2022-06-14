import { combineReducers, createStore } from 'redux';
import tagsReducer from './tags/reducers';
import todoReducer from './todos/reducer';

let store = createStore(combineReducers({
        todos: todoReducer,
        tags: tagsReducer,
    }), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store