import React from 'react';
import ToDoItem from "./ToDoItem";

const ToDoList = function ({ editToDo, deleteToDo, toDoArray }) {
    return (
        <ul>
            {toDoArray.map((todo) => {
                return <ToDoItem
                    editToDo={editToDo}
                    deleteToDo={deleteToDo}
                    isCompleted={todo.isCompleted}
                    id={todo.id}
                    key={todo.id}
                    content={todo.content}/>
            })}
        </ul>
    )
};

export default ToDoList;
