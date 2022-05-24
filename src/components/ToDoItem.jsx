import React from 'react';

const ToDoItem = function ({ editToDo, content, isCompleted, deleteToDo, id }) {

    return (
        <li>
            <p onClick={() => editToDo(id)}>
                {content} {isCompleted.toString()}
            </p>
        <button onClick={() => deleteToDo(id)}>x</button>
        </li>
    )
};

export default ToDoItem;
