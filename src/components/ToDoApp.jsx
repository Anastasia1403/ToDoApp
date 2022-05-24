import React, {useState} from 'react';
import Form from "./Form";
import ToDoList from "./ToDoList";

const ToDoApp = function () {
    const [toDoArray, setToDoArray] = useState([]);

    function handleAddToDo(todo) {
        const currentArray = [...toDoArray];
        currentArray.push({
            id: Date.now(),
            content: todo,
            isCompleted: false
        });
        setToDoArray(currentArray);
    }

    function deleteToDo(id) {
        const newArray = [...toDoArray];
        newArray.forEach((item, index) => {
                if (item.id === id) {
                    newArray.splice(index, 1)
                }
            }
        );
        setToDoArray(newArray);
    }

    function editToDo(id) {
        const newArray = [...toDoArray];
        newArray.forEach((item) => {
                if (item.id === id) {
                    item.isCompleted = !item.isCompleted
                }
            }
        );
        setToDoArray(newArray);
    }

    return (
        <>
            <Form handleAddToDo={handleAddToDo}/>
            {toDoArray.length ?
                <ToDoList deleteToDo={deleteToDo}
                          editToDo={editToDo}
                          toDoArray={toDoArray}/>
                : <p>What do you want to do?</p>
            }
        </>
    )
};

export default ToDoApp;
