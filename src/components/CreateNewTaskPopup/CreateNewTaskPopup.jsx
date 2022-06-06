import React, { useState } from 'react';
import Modal from 'react-modal';
import { CloseButton, NewTaskForm, TagItem, TagsList, customStyles, StyledInput, StyledTextarea } from './styled'

Modal.setAppElement('#root');

const CreateNewTaskPopup = ({ closeModal, modalIsOpen, addToDo, tagsTypes }) => {
    const [todo, setTodo] = useState({title: '', note: '', tags: []});

    function handleOnClick(e) {
        e.preventDefault()
        addToDo(todo.title, todo.note, todo.tags);
        setTodo({title: '', note: '', tags: []});
        closeModal()
    }
    function handleOnChangeTodo(e) {
        const newTodo = {...todo};
        switch (e.target.id) {
            case 'todo-title':
                newTodo.title = e.target.value
                break;
            case 'todo-note':
                newTodo.note = e.target.value
                break;
            default:
                if (newTodo.tags.includes(e.target.name)) {
                    newTodo.tags = newTodo.tags.filter(tag => tag !== e.target.name)
                } else {
                    newTodo.tags = [...newTodo.tags, e.target.name]
                }
                break;
          }
        setTodo(newTodo)
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
        >
            <CloseButton onClick={closeModal}>✖</CloseButton>
            <NewTaskForm>

                <h4>Create New Task</h4>
                <StyledInput type='text' id='todo-title' value={todo.title} onChange={handleOnChangeTodo} placeholder='Add new task'/>
                <StyledTextarea id='todo-note' placeholder='Add note' value={todo.note} onChange={handleOnChangeTodo}></StyledTextarea>
                <TagsList>
                    {tagsTypes.map(tag => <TagItem onChange={handleOnChangeTodo} color={tag.color} key={tag.title}><label><input name={tag.title} type="checkbox"/>{tag.title}</label></TagItem>)}
                </TagsList>

                <button type="submit" onClick={handleOnClick} disabled={!Boolean(todo.title)}>Add Task</button>

            </NewTaskForm>

        </Modal>
    )
}

export default CreateNewTaskPopup;


