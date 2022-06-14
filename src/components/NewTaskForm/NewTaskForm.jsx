import React, { useState } from 'react'
import { Form, TagCheckbox, TagCheckboxLabel, TagsList } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import { addTodoAction } from '../../store/todos/action';
import TagItem from '../TagItem/TagItem';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

function NewTaskForm({closeModal}) {

    const dispatch = useDispatch();
    const tagsList = useSelector(state => state.tags)
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);

    function onSubmit(e) {
        e.preventDefault()
        dispatch(addTodoAction({title, description, tags}));
        closeModal()
        setTitle('');
        setDescription('');
        setTags([]);
    }
    function onChangeTodo(e) {
        setTitle(e.target.value)
    }
    function onChangeDescription(e) {
        setDescription(e.target.value)
    }
    function onChangeTags(e) {
        if (tags.includes(e.target.id)) {
            setTags(tags.filter(tag => tag !== e.target.id))
        } else {
            setTags([...tags, e.target.id])
        }
    }
  return (
    <Form>
        <h4>Create New Task</h4>
        <Input type='text' value={title} onChange={onChangeTodo} placeholder='Add new task'/>
        <Textarea placeholder='Add note' value={description} onChange={onChangeDescription}/>
        <TagsList>
            {Object.entries(tagsList).map(([id, tag]) => <TagItem
                                            checked={tags.includes(id)}
                                            color={tag.color} 
                                            key={id}
                                            >
                                                <TagCheckbox
                                                    onClick={onChangeTags}
                                                    type="checkbox"
                                                    id={id}
                                                    name={tag.title}/>
                                                <TagCheckboxLabel
                                                    htmlFor={id}
                                                    checked={tags.includes(id)}
                                                    color={tag.color}>
                                                        {tag.title}
                                                </TagCheckboxLabel>
                                            </TagItem>)}
        </TagsList>

        <Button type="submit" onClick={onSubmit} disabled={!Boolean(title)} title="Add Task"></Button>

    </Form>
  )
}

export default NewTaskForm