import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import TaskDetails from './TaskDetails';
import ToDoList from "./ToDoList";
import styled from 'styled-components'

const MainBlock = styled.main`
    display: flex;
    gap: 80px;
    padding: 160px 80px;`

const testTask = {
    id: 1,
    content: 'go to art store',
    note: 'buy colored pencils, paper, watercolor',
    tags: ['hobby' ],
    isCompleted: false, 
}

const defaultTagsArray = [
    {title: "family", color: "#df6575"},
    {title: "work", color: "#fab655"},
    {title: "homework", color: "#435675"},
    {title: "hobby", color: "#4596c5"},
]

const ToDoApp = () => {
    const [toDoArray, setToDoArray] = useState([ testTask ]);
    const [currentToDo, setCurrentToDo] = useState({});

    const [tagsTypes, setTagsTypes] = useState(defaultTagsArray);

    function onChangeCurrentToDo(id) {
        console.log(id)
        setCurrentToDo(toDoArray.filter(todo => todo.id === id))
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
        <Sidebar tagsTypes={tagsTypes}/>
        <MainBlock>
            <ToDoList onChangeCurrentToDo={onChangeCurrentToDo} tagsTypes={tagsTypes} addToDo={addToDo} deleteToDo={deleteToDo} editToDo={editToDo} toDoArray={toDoArray}/>
            <TaskDetails currentToDo={currentToDo}/>
        </MainBlock>
        </>
    )
};

export default ToDoApp;
