import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import TaskDetails from './TaskDetails/TaskDetails';
import ToDoList from "./ToDoList/ToDoList";
import styled from 'styled-components';
import { useSelector } from 'react-redux';


export const MainBlock = styled.main`
    display: flex;
    gap: 80px;
    padding: 160px 80px;`

const ToDoApp = () => {
    const [currentToDoId, setCurrentToDoId] = useState('');
    const currentToDo = useSelector(state => currentToDoId && Object.values(state.todos).length ? state.todos[currentToDoId] : {})
   

    function onChangeCurrentToDo(id) {
        setCurrentToDoId(id)
    }

    return (
        <>
        <Sidebar/>
        <MainBlock>
            <ToDoList 
            onChangeCurrentToDo={onChangeCurrentToDo}
            currentToDoId={currentToDoId}
            />
            <TaskDetails currentToDoId={currentToDoId} currentToDo={currentToDo}/>
        </MainBlock>
        </>
    )
};

export default ToDoApp;
