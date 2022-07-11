import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../shared/Button/Button'
import { addTagAction, editTagAction } from '../../store/tags/actions'
import Input from '../../shared/Input/Input'
import { selectCustomStyles } from './styled'
import { colorsOptionsSelector } from '../../store/colors/selectors'
import { useSelector } from 'react-redux';
import { toggleColorsAction } from '../../store/colors/actions'
import Select from 'react-select'
import Label from '../../shared/Label/Label'
import { Form } from '../../shared/Form'
import { InputWrapper } from '../../shared/InputWrapper'
import { tagsByIdSelector } from '../../store/tags/selectors'


function ChangeTagsForm({ editedTagId=null, closeModal }) {
    
    //TODO: use reselect library
    const [editedTag] = useSelector(tagsByIdSelector([editedTagId]))
    const colorsOptionsList = useSelector(colorsOptionsSelector(Number(editedTag?.color)))

    const selectedColor = editedTag?.color ? 
        colorsOptionsList.find(colorOption => Number(colorOption.value) === editedTag?.color) : null


    const [tagTitle, setTagTitle] = useState(editedTagId ? editedTag.title : '')
    const [tagColor, setTagColor] = useState(editedTagId ? selectedColor : '')
    
    const dispatch = useDispatch()
    const onChangeTagTitle = (e) => {
        setTagTitle(e.target.value)
    }
    const onChangeTagColor = (e) => {
        setTagColor(e)
    }
    const onSubmit = (e) => {
        if (editedTagId) {
            e.preventDefault()
            closeModal(e);
            dispatch(editTagAction({id: editedTagId, title: tagTitle, colorId: tagColor.value}))
            dispatch(toggleColorsAction(tagColor.value))
            dispatch(toggleColorsAction(editedTag.color))
        } else {
            e.preventDefault()
            dispatch(addTagAction({title: tagTitle, colorId: tagColor.value}));
            closeModal(e);
            dispatch(toggleColorsAction(tagColor.value))
        }
        
    }

    const isButtonDisabled = !Boolean(tagTitle) || !Boolean(tagColor?.value)
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

export default ChangeTagsForm