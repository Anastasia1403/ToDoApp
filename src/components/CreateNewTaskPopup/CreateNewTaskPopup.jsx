import React, { useState } from 'react';
import Modal from 'react-modal';
import TagItem from '../TagItem/TagItem';
import { defaultTagsArray } from "./../../helpers/constants";
import { CloseButton, NewTaskForm, TagsList, customStyles, StyledInput, StyledTextarea, TagCheckbox, TagCheckboxLabel } from './styled'

Modal.setAppElement('#root');

const CreateNewTaskPopup = ({ closeModal, modalIsOpen, addToDo }) => {
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);

    function handleOnClick(e) {
        e.preventDefault()
        addToDo(todo, description, tags);
        closeModal();
        setTodo('');
        setDescription('');
        setTags([])
    }
    function onChangeTodo(e) {
        setTodo(e.target.value)
    }
    function onChangeDescription(e) {
        setDescription(e.target.value)
    }
    function onChangeTags(e) {
        console.log(e.target.name)
        if (tags.includes(e.target.name)) {
            setTags(tags.filter(tag => tag !== e.target.name))
        } else {
            setTags([...tags, e.target.name])
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick
            style={customStyles}
        >
            <CloseButton onClick={closeModal}>✖</CloseButton>
            <NewTaskForm>

                <h4>Create New Task</h4>
                <StyledInput type='text' value={todo} onChange={onChangeTodo} placeholder='Add new task'/>
                <StyledTextarea placeholder='Add note' value={description} onChange={onChangeDescription}></StyledTextarea>
                <TagsList>
                    {defaultTagsArray.map(tag => <TagItem
                                                    checked={tags.includes(tag.title)}
                                                    color={tag.color} 
                                                    key={tag.title}
                                                    title={tag.title}>
                                                        <TagCheckbox
                                                            onChange={onChangeTags}
                                                            type="checkbox"
                                                            id={tag.title}
                                                            name={tag.title}/>
                                                        <TagCheckboxLabel
                                                            for={tag.title}
                                                            checked={tags.includes(tag.title)}
                                                            color={tag.color}>
                                                                {tag.title}
                                                        </TagCheckboxLabel>
                                                    </TagItem>)}
                </TagsList>

                <button type="submit" onClick={handleOnClick} disabled={!Boolean(todo)}>Add Task</button>

            </NewTaskForm>

        </Modal>
    )
}

export default CreateNewTaskPopup;


