import React, { useState } from 'react'
import { Form, TagsList } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import { addTodoAction } from '../../store/todos/action';
import TagItem from '../../shared/TagItem/TagItem';
import Input from '../../shared/Input/Input';
import Textarea from '../../shared/Textarea/Textarea';

function NewTaskForm({closeModal}) {

    const dispatch = useDispatch();
    const tagsList = useSelector(state => state.tags)
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

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
    return (
        <Form>
            <h4>Create New Task</h4>
            <Input type='text' value={title} onChange={onChangeTodo} placeholder='Add new task'/>
            <Textarea placeholder='Add note' value={description} onChange={onChangeDescription}/>
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
            </TagsList>

            <Button type="submit" onClick={onSubmit} disabled={!Boolean(title)}>Add Task</Button>

        </Form>
    )
}

export default NewTaskForm