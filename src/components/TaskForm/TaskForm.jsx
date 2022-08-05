import React, {  useState } from 'react'
import {  useSelector } from 'react-redux';

import { tagsOptionsSelector } from '../../store/tags/selectors';
import { currentTodoSelector } from '../../store/todos/selectors';

import EditTaskForm from './EditTaskForm';
import CreateTaskForm from './CreateTaskForm';
import moment from 'moment';

function TaskForm({currentToDoId=null, closeModal, onToggleEditMode}) {
    const currentToDo = useSelector(currentTodoSelector(currentToDoId))
    const tagsOptions = useSelector(tagsOptionsSelector)

    const selectedTagsOptions = currentToDo.tags && currentToDo.tags.length ? 
        tagsOptions.filter(tagOption => currentToDo.tags.includes(tagOption.value)) : []
        
    const [title, setTitle] = useState(currentToDo.title || '')
    const [description, setDescription] = useState(currentToDo.description || '')
    const [selectedTags, setSelectedTags] = useState(selectedTagsOptions || []);
    const [isCompleted, setIsCompleted] = useState(currentToDo.isCompleted)
    const [deadline, setDeadline] = useState(moment(currentToDo.deadline).toDate() || new Date())

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
            const tagId = Number(e.target.id)
            setSelectedTags(selectedTags.includes(tagId) ? 
                selectedTags.filter(tag => tag !== tagId) :
                [...selectedTags, tagId]
            )
        }
    }
    const onChangeDeadline = (date) => {
        setDeadline(moment(date).toDate())
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
            deadline={deadline}
            onChangeDeadline={onChangeDeadline}
            onToggleEditMode={onToggleEditMode}
        /> : 
        <CreateTaskForm
            title={title}
            onChangeTitle={onChangeTitle}
            description={description}
            onChangeDescription={onChangeDescription}
            selectedTags={selectedTags}
            onChangeTags={onChangeTags}
            deadline={deadline}
            onChangeDeadline={onChangeDeadline}
            closeModal={closeModal}
        />
}

export default TaskForm