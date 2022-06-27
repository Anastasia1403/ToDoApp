import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../shared/Button/Button'
import { addTagAction } from '../../store/tags/actions'
import Input from '../../shared/Input/Input'
import { selectCustomStyles } from './styled'
import { colorsSelector } from '../../store/colors/selectors'
import { useSelector } from 'react-redux';
import { deleteColorsAction } from '../../store/colors/actions'
import Select from 'react-select'
import Label from '../../shared/Label/Label'
import Title from '../../shared/Title/Title'
import { Form } from '../../shared/Form'
import { InputWrapper } from '../../shared/InputWrapper'


function ChangeTagsForm({ closeModal }) {
    const [tagTitle, setTagTitle] = useState('')
    const [tagColorId, setTagColorId] = useState('')


    const colorsList = useSelector(colorsSelector)
    const colorOptions = Object.entries(colorsList).map(([id, color]) => {
        return {value: id, label: color.color}
    })
    const dispatch = useDispatch()
    const onChangeTagTitle = (e) => {
        setTagTitle(e.target.value)
    }
    const onChangeTagColor = (e) => {
        setTagColorId(e.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addTagAction({title: tagTitle, color: colorsList[tagColorId].color}));
        closeModal(e);
        dispatch(deleteColorsAction(tagColorId))
        setTagTitle('');
        setTagColorId('');
    }
    return (
        <Form>
            <Title>Create New Tag</Title>
            <InputWrapper>
            <Label htmlFor='tagName'>
                Title*
            </Label>
                <Input 
                id='tagName' 
                type='text' 
                value={tagTitle} 
                onChange={onChangeTagTitle} 
                placeholder='New tag title' 
                autoFocus
                />
            </InputWrapper>
            <InputWrapper>
            <Label htmlFor='colorSelect'>
                Color*
            </Label>
                <Select
                styles={selectCustomStyles}
                onChange={onChangeTagColor}
                options={colorOptions}
                placeholder='Select tag color'
                id='colorSelect'
                />
            </InputWrapper>
            
            <Button type='submit' disabled={!Boolean(tagTitle) || !Boolean(tagColorId)} onClick={onSubmit}>Create Tag</Button>
            
            
        </Form>
    )
}

export default ChangeTagsForm