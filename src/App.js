import React, { useEffect } from 'react';
import Router from './routes/Router';
import { useDispatch } from 'react-redux'
import { fetchColors } from './store/colors/thunk'
import { fetchTags } from './store/tags/thunk';
import { fetchTasks } from './store/todos/thunk';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchColors())
        .then(() => dispatch(fetchTags()))
        .then(() => dispatch(fetchTasks()))
    }, [dispatch])

    return (
        <Router/>

    )
};

export default App;