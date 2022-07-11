import React, { useContext, useState } from 'react'
import { CheckboxWrapper, TagsList } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import { addTodoAction, editTodoAction } from '../../store/todos/actions';
import TagItem from '../../shared/TagItem/TagItem';
import Input from '../../shared/Input/Input';
import Textarea from '../../shared/Textarea/Textarea';
import { TagsModalContext } from '../ToDoApp';
import { Form } from '../../shared/Form';
import { InputWrapper } from '../../shared/InputWrapper';
import { tagsOptionsSelector, tagsSelector } from '../../store/tags/selectors';
import { currentTodoSelector } from '../../store/todos/selectors';
import Select from 'react-select';
import Label from '../../shared/Label/Label';
import { ButtonsWrapper } from '../../shared/ButtonsWrapper';
import ToggleSwitcher from '../../shared/ToggleSwitcher/ToggleSwitcher';

function TaskForm({currentToDoId=null, closeModal, toggleEditMode}) {
    const currentToDo = useSelector(currentTodoSelector(currentToDoId))
    const tagsOptions = useSelector(tagsOptionsSelector)
    const tagsList = useSelector(tagsSelector)

    const dispatch = useDispatch();

    const selectedTagsOptions = currentToDo.tags && currentToDo.tags.length ? 
        tagsOptions.filter(tagOption => currentToDo.tags.includes(tagOption.value)) : []
    
    const {setIsOpen} = useContext(TagsModalContext)
    
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
    //for editing
    const onChangeTagsEdit = (e) => {
        setSelectedTags(e)
    }
    // for creating
    const onChangeTagsCreate = (e) => {
        if (selectedTags.includes(e.target.id)) {
            setSelectedTags(selectedTags.filter(tag => tag !== e.target.id))
        } else {
            setSelectedTags([...selectedTags, e.target.id])
        }
    }

    const openTagsModal = (e) => {
        e.preventDefault();
        setIsOpen(true)
    }
    // edit
    const onSubmitEdit = (e) => {
        e.preventDefault()
        const tagsIdsArray = selectedTags.map(tag => tag.value)
        dispatch(editTodoAction({id: currentToDoId, title, description, tags: tagsIdsArray, isCompleted}))
        toggleEditMode()
    }

    // create
    function onSubmitCreate(e) {
        e.preventDefault()
        dispatch(addTodoAction({title, description, tags: selectedTags}));
        closeModal()
    }
    
    return (
        <Form>
            <InputWrapper>
            <Label htmlFor="title">Task</Label>
                <Input type='text' id="title" value={title} onChange={onChangeTitle} placeholder='Add new task' autoFocus/>
            </InputWrapper>
            <InputWrapper>
            <Label htmlFor="description">Description</Label>
                <Textarea placeholder='Add note' id="description" value={description} onChange={onChangeDescription}/>
            </InputWrapper>
            <InputWrapper>
            {
                currentToDoId ? 
                    <>
                        <Label htmlFor="tagSelect">Tags</Label>
                        <Select
                        id='tagSelect'
                        placeholder='Select tags'
                        isMulti
                        options={tagsOptions}
                        value={selectedTags}
                        onChange={onChangeTagsEdit}
                        />
                    </> :
                    <TagsList>
                        {Object.entries(tagsList).map(([id, tag]) => 
                        <TagItem
                            checked={selectedTags.includes(id)}
                            tag={tag} 
                            key={id}
                            id={id}
                            onClick={onChangeTagsCreate}
                        >

                        </TagItem>)}
                        <Button type='button' onClick={openTagsModal}>+</Button>
                    </TagsList>
            }
            </InputWrapper>
            {
            currentToDoId &&
                <CheckboxWrapper>
                    <Label> Status </Label>                 
                    <ToggleSwitcher 
                        isChecked={isCompleted}
                        onChange={onChangeStatus}
                    />
                </CheckboxWrapper>
                
            }

            {
                currentToDoId ? 
                    <ButtonsWrapper>
                        <Button type='submit' onClick={onSubmitEdit}>Save</Button>
                        <Button type='button' onClick={toggleEditMode}>Cancel</Button>
                    </ButtonsWrapper> : 
                    <Button type="submit" onClick={onSubmitCreate} disabled={!Boolean(title)}>
                        Add Task
                    </Button>
            }
        </Form>
    )
}

export default TaskForm