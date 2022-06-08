import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import TaskDetails from './TaskDetails';
import ToDoList from "./ToDoList";
import styled from 'styled-components';
import { testTask } from "./../helpers/constants";


export const MainBlock = styled.main`
    display: flex;
    gap: 80px;
    padding: 160px 80px;`



const ToDoApp = () => {
    const [toDoArray, setToDoArray] = useState([ testTask ]);
    const [currentToDo, setCurrentToDo] = useState({});

//     const [tagsTypes, setTagsTypes] = useState(defaultTagsArray);

    function onChangeCurrentToDo(id) {
        console.log(id)
        setCurrentToDo(toDoArray.find(todo => todo.id === id))
    }

    function addToDo(todo, note, tags) {
        const currentArray = [...toDoArray];
        currentArray.push({
            id: Date.now(),
            content: todo,
            note,
            tags,
            isCompleted: false,
        });
        setToDoArray(currentArray);
    }

    function deleteToDo(id) {
        setToDoArray(toDoArray.filter(item => item.id !== id));
    }

    function editToDo(id) {
        const newArray = [...toDoArray];
        const index = newArray.findIndex((item) => item.id === id);
        newArray[index].isCompleted = !newArray[index].isCompleted;
        setToDoArray(newArray);
    }

    return (
        <>
        <Sidebar/>
        <MainBlock>
            <ToDoList onChangeCurrentToDo={onChangeCurrentToDo} addToDo={addToDo} deleteToDo={deleteToDo} editToDo={editToDo} toDoArray={toDoArray}/>
            <TaskDetails currentToDo={currentToDo}/>
        </MainBlock>
        </>
    )
};

export default ToDoApp;
