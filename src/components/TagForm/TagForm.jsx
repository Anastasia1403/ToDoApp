import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../shared/Button/Button'
import Input from '../../shared/Input/Input'
import { colorsOptionsSelector } from '../../store/colors/selectors'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import Label from '../../shared/Label/Label'
import { Form } from '../../shared/Form'
import { InputWrapper } from '../../shared/InputWrapper'
import { tagByIdSelector } from '../../store/tags/selectors'
import { addTag, editTag } from '../../store/tags/thunk'
import { selectCustomStyles } from '../../shared/Select'


function TagForm({ editedTagId=null, closeModal }) {

    //TODO: use reselect library
    const editedTag = useSelector(tagByIdSelector(editedTagId))
    const colorsOptionsList = useSelector(colorsOptionsSelector(editedTag?.colorId))
    const selectedColor = editedTag?.colorId ? 
        colorsOptionsList.find(colorOption => colorOption.value === editedTag?.colorId) : null

    const [tagTitle, setTagTitle] = useState(editedTagId ? editedTag.title : '')
    const [tagColor, setTagColor] = useState(editedTagId ? selectedColor : '')
    const isButtonDisabled = !Boolean(tagTitle) || !Boolean(tagColor?.value)
    
    const dispatch = useDispatch()
    const onChangeTagTitle = (e) => {
        setTagTitle(e.target.value)
    }
    const onChangeTagColor = (e) => {
        setTagColor(e)
    }
    const onSubmit = (e) => {
        closeModal(e);
        if (editedTagId) {      
            dispatch(editTag({id: editedTagId, title: tagTitle, colorId: tagColor.value}))
        } else {
            dispatch(addTag({title: tagTitle, colorId: tagColor.value}))
        }
    }

    return (
        <Form>
            <InputWrapper>
                <Label htmlFor='tagName' required>
                    Title
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
                <Label htmlFor='colorSelect' required>
                    Color
                </Label>
                <Select
                styles={selectCustomStyles}
                onChange={onChangeTagColor}
                options={colorsOptionsList}
                value={tagColor}
                placeholder='Select tag color'
                id='colorSelect'
                />
            </InputWrapper>
            
            <Button type='submit' disabled={isButtonDisabled} onClick={onSubmit}>{editedTagId ? 'Save' : 'Create Tag'}</Button>            
            
        </Form>
    )
}

export default TagForm