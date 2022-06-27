import React, { useContext, useState } from 'react'
import { TagsList } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import { addTodoAction } from '../../store/todos/actions';
import TagItem from '../../shared/TagItem/TagItem';
import Input from '../../shared/Input/Input';
import Textarea from '../../shared/Textarea/Textarea';
import { TagsModalContext } from '../ToDoApp';
import Title from '../../shared/Title/Title';
import { Form } from '../../shared/Form';
import { InputWrapper } from '../../shared/InputWrapper';
import { useEffect } from 'react';

function NewTaskForm({closeModal}) {

    const dispatch = useDispatch();
    const tagsList = useSelector(state => state.tags)
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
      
    
    }, [])
    

    function onSubmit(e) {
        e.preventDefault()
        dispatch(addTodoAction({title, description, tags: selectedTags}));
        closeModal()
        setTitle('');
        setDescription('');
        setSelectedTags([]);
    }
    function onChangeTodo(e) {
        setTitle(e.target.value)
    }
    function onChangeDescription(e) {
        setDescription(e.target.value)
    }
    function onChangeTags(e) {
        if (selectedTags.includes(e.target.id)) {
            setSelectedTags(selectedTags.filter(tag => tag !== e.target.id))
        } else {
            setSelectedTags([...selectedTags, e.target.id])
        }
    }
    const {setIsOpen} = useContext(TagsModalContext)

    const openTagsModal = (e) => {
        e.preventDefault();
        setIsOpen(true)
    }
    return (
        <Form>
            <Title>Create New Task</Title>

            <InputWrapper>
                <Input type='text' value={title} onChange={onChangeTodo} placeholder='Add new task' autoFocus/>
            </InputWrapper>
            <InputWrapper>
                <Textarea placeholder='Add note' value={description} onChange={onChangeDescription}/>
            </InputWrapper>
            <InputWrapper>
                <TagsList>
                    {Object.entries(tagsList).map(([id, tag]) => <TagItem
                                                    checked={selectedTags.includes(id)}
                                                    color={tag.color} 
                                                    key={id}
                                                    id={id}
                                                    title={tag.title}
                                                    onClick={onChangeTags}
                                                    >
                                                        
                                                    </TagItem>)}
                    <Button type='button' onClick={openTagsModal}>+</Button>
                </TagsList>
            </InputWrapper>

            <Button type="submit" onClick={onSubmit} disabled={!Boolean(title)}>Add Task</Button>

        </Form>
    )
}

export default NewTaskForm