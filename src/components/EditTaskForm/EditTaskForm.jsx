import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import Button from '../../shared/Button/Button'
import { Form } from '../../shared/Form'
import Input from '../../shared/Input/Input'
import { InputWrapper } from '../../shared/InputWrapper'
import Label from '../../shared/Label/Label'
import Textarea from '../../shared/Textarea/Textarea'
import { tagsOptionsSelector } from '../../store/tags/selectors'
import { editTodoAction } from '../../store/todos/actions'
import { currentTodoSelector } from '../../store/todos/selectors'
import { ButtonWrapper } from './styled'

function EditTaskForm({ toggleEditMode, currentToDoId }) {
    const currentToDo = useSelector(currentTodoSelector(currentToDoId))
    const tagsOptions = useSelector(tagsOptionsSelector)


    const selectedTags = currentToDo.tags && currentToDo.tags.length ? 
        tagsOptions.filter(tagOption => currentToDo.tags.includes(tagOption.value)) : []

    const [title, setTitle] = useState(currentToDo.title)
    const [description, setDescription] = useState(currentToDo.description)
    const [tags, setTags] = useState(selectedTags)
    const [isCompleted, setIsCompleted] = useState(currentToDo.isCompleted)
    const dispatch = useDispatch()

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const onChangeTags = (e) => {
        setTags(e)
    }
    const editTask = (e) => {
        e.preventDefault()
        const tagsIdsArray = tags.map(tag => tag.value)
        dispatch(editTodoAction({id: currentToDoId, title, description, tags: tagsIdsArray, isCompleted}))
        toggleEditMode()
    }
    const onChangeStatus = (e) => {
        e.target.value === 'done' ? setIsCompleted(true) : setIsCompleted(false)
    }

    return (
        <Form>
            <InputWrapper>
                <Label htmlFor='todoTitle'>Task</Label>
                <Input
                    id='todoTitle'
                    type='text'
                    value={title}
                    onChange={onChangeTitle}
                />
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor='todoDescription'>Description</Label>
                <Textarea 
                    id='todoDescription'
                    value={description}
                    onChange={onChangeDescription}
                />
            </InputWrapper>
            
            <InputWrapper>
                <Label htmlFor='tagSelect'>Tags</Label>
                <Select
                    id='tagSelect'
                    isMulti
                    options={tagsOptions}
                    value={tags}
                    onChange={onChangeTags}
                />
            </InputWrapper>
            
            <div >
            <Label>
                <input
                type='radio'
                name='status'
                value='done'
                checked={!!isCompleted}
                onChange={onChangeStatus}
                />
                done
            </Label>
            <Label>
                <input
                type='radio'
                name='status'
                value='in progress'
                checked={!isCompleted}
                onChange={onChangeStatus}
                />
                in progress
                {isCompleted}
            </Label>
            </div>
            <ButtonWrapper>
                <Button type='submit' onClick={editTask}>Save</Button>
                <Button type='button' onClick={toggleEditMode}>Cancel</Button>
            </ButtonWrapper>
            
        </Form>
    )
}

export default EditTaskForm