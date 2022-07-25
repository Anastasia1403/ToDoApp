import React, {  useState } from 'react'
import {  useSelector } from 'react-redux';

import { tagsOptionsSelector } from '../../store/tags/selectors';
import { currentTodoSelector } from '../../store/todos/selectors';

import EditTaskForm from './EditTaskForm';
import CreateTaskForm from './CreateTaskForm';

function TaskForm({currentToDoId=null, closeModal, onToggleEditMode}) {
    const currentToDo = useSelector(currentTodoSelector(currentToDoId))
    const tagsOptions = useSelector(tagsOptionsSelector)

    const selectedTagsOptions = currentToDo.tags && currentToDo.tags.length ? 
        tagsOptions.filter(tagOption => currentToDo.tags.includes(Number(tagOption.value))) : []
        
    const [title, setTitle] = useState(currentToDo.title || '')
    const [description, setDescription] = useState(currentToDo.description || '')
    const [selectedTags, setSelectedTags] = useState(selectedTagsOptions || []);
    const [isCompleted, setIsCompleted] = useState(currentToDo.isCompleted)

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    
    const onChangeStatus = (e) => {
        setIsCompleted(e.target.checked)
    }
    const onChangeTags = (e) => {
        if (currentToDoId) setSelectedTags(e)
        else {
            //if clicked tag is already in selectedTags then remove it from there otherwise add it
            setSelectedTags(selectedTags.includes(+e.target.id) ? 
                selectedTags.filter(tag => tag !== +e.target.id) :
                [...selectedTags, +e.target.id]
            )
        }
    }
    
    return currentToDoId ? 
        <EditTaskForm
            currentToDoId={currentToDoId}
            title={title}
            onChangeTitle={onChangeTitle}
            description={description}
            onChangeDescription={onChangeDescription}
            selectedTags={selectedTags}
            onChangeTags={onChangeTags}
            isCompleted={isCompleted}
            onChangeStatus={onChangeStatus}
            onToggleEditMode={onToggleEditMode}
        /> : 
        <CreateTaskForm
            title={title}
            onChangeTitle={onChangeTitle}
            description={description}
            onChangeDescription={onChangeDescription}
            selectedTags={selectedTags}
            onChangeTags={onChangeTags}
            closeModal={closeModal}
        />
}

export default TaskForm