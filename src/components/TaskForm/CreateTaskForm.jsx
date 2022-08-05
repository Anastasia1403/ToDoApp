import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import { Form } from '../../shared/Form';
import Input from '../../shared/Input/Input'
import { InputWrapper } from '../../shared/InputWrapper'
import Label from '../../shared/Label/Label'
import TagItem from '../../shared/TagItem/TagItem';
import Textarea from '../../shared/Textarea/Textarea';
import { tagsSelector } from '../../store/tags/selectors';
import { TagsList } from './styled';
import { addTask } from '../../store/todos/thunk';
import ReactDatePicker from 'react-datepicker';
import "./react-datepicker.css";
import moment from 'moment';

function CreateTaskForm({
    title,
    onChangeTitle,
    description,
    onChangeDescription,
    selectedTags,
    onChangeTags,
    deadline,
    onChangeDeadline,
    closeModal
}) {
    const tagsList = useSelector(tagsSelector)
    const dispatch = useDispatch();

    function onSubmitCreate(e) {
        dispatch(addTask({title, description, tags: selectedTags, deadline: moment(deadline).format()}));
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
                <Label htmlFor="deadline">Deadline</Label>
                    <ReactDatePicker
                        dateFormat="MMM do yyyy"
                        selected={deadline}
                        onChange={onChangeDeadline}
                        minDate={new Date()}
                        showDisabledMonthNavigation
                        shouldCloseOnSelect={false}
                        placeholderText="Pick deadline"
                        customInput={<Input id='deadline'/>}
                    />
                </InputWrapper>
                <InputWrapper>
                    <TagsList>
                        {Object.entries(tagsList).map(([id, tag]) => 
                        <TagItem
                            checked={selectedTags.includes(Number(id))}
                            tag={tag} 
                            key={id}
                            id={id}
                            onClick={onChangeTags}
                        >
                        </TagItem>)}
                    </TagsList>
                </InputWrapper>
                <Button type="submit" onClick={onSubmitCreate} disabled={!title}>
                    Add Task
                </Button>
        </Form>
        
    )
}

export default CreateTaskForm