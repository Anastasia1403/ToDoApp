import React, {useState} from 'react';
import ToDoItem from "./ToDoItem/ToDoItem";
import CreateNewTaskPopup from "./CreateNewTaskPopup/CreateNewTaskPopup";
import { StyledSection } from "../shared/StyledSection";

const ToDoList = ({ addToDo, editToDo, deleteToDo, onChangeCurrentToDo, toDoArray, tagsTypes }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal (e) {
        e.preventDefault()
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <StyledSection>
            { toDoArray.length ?
                <ul>
                    {toDoArray.map((todo) => {
                        return <ToDoItem
                            onChangeCurrentToDo={onChangeCurrentToDo}
                            editToDo={editToDo}
                            deleteToDo={deleteToDo}
                            isCompleted={todo.isCompleted}
                            id={todo.id}
                            tags={todo.tags}
                            tagsTypes={tagsTypes}
                            key={todo.id}
                            todo={todo.content}
                            />
                    })}
                </ul>
            : <p>What do you want to do?</p> }
            <button onClick= {openModal}>Create New Task</button>
            <CreateNewTaskPopup 
                tagsTypes={tagsTypes}
                addToDo={addToDo}
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
            />
        </StyledSection>
    )
};

export default ToDoList;
