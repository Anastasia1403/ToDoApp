import moment from 'moment';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import Button from '../../shared/Button/Button';
import { ButtonsWrapper } from '../../shared/ButtonsWrapper';
import { Form } from '../../shared/Form';
import Input from '../../shared/Input/Input'
import { InputWrapper } from '../../shared/InputWrapper'
import Label from '../../shared/Label/Label'
import Textarea from '../../shared/Textarea/Textarea';
import ToggleSwitcher from '../../shared/ToggleSwitcher/ToggleSwitcher';
import { tagsOptionsSelector } from '../../store/tags/selectors';
import { editTask } from '../../store/todos/thunk';
import { CheckboxWrapper } from './styled';

function EditTaskForm({
    currentToDoId,
    title,
    onChangeTitle,
    description,
    onChangeDescription,
    selectedTags,
    onChangeTags,
    deadline,
    onChangeDeadline,
    isCompleted,
    onChangeStatus,
    onToggleEditMode
    }) {
    
    const tagsOptions = useSelector(tagsOptionsSelector);
    const dispatch = useDispatch();

    const onSubmitEdit = (e) => {
        const tagsIdsArray = selectedTags.map(tag => tag.value)
        dispatch(editTask({id: currentToDoId, title, description, tags: tagsIdsArray, isCompleted, deadline: moment(deadline).toISOString()}))
        onToggleEditMode()
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
                    <Label htmlFor="tagSelect">Tags</Label>
                    <Select
                    id='tagSelect'
                    placeholder='Select tags'
                    isMulti
                    options={tagsOptions}
                    value={selectedTags}
                    onChange={onChangeTags}
                    />
                </InputWrapper>

                    <CheckboxWrapper>
                        <Label> Status </Label>                 
                        <ToggleSwitcher 
                            isChecked={isCompleted}
                            onChange={onChangeStatus}
                        />
                    </CheckboxWrapper>
                        <ButtonsWrapper>
                            <Button type='submit' onClick={onSubmitEdit}>Save</Button>
                            <Button type='button' onClick={onToggleEditMode}>Cancel</Button>
                        </ButtonsWrapper> 
            </Form>
    )
}

export default EditTaskForm