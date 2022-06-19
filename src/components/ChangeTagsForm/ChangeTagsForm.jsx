import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { colors } from '../../helpers/constants'
import Button from '../../shared/Button/Button'
import { addTagAction } from '../../store/tags/actions'
import Input from '../../shared/Input/Input'
import { Form, Select, SelectOption } from './styled'

function ChangeTagsForm() {
    const [tagTitle, setTagTitle] = useState('')
    const [tagColor, setTagColor] = useState('')

    const dispatch = useDispatch()
    const onChangeTagTitle = (e) => {
        setTagTitle(e.target.value)
    }
    const onChangeTagColor = (e) => {
        setTagColor(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addTagAction({title: tagTitle, color: tagColor}));
        setTagTitle('');
        setTagColor('');
    }
    return (
        <Form>
            <h4>Create New Tag</h4>
            <label>
                Title*
                <Input type='text' value={tagTitle} onChange={onChangeTagTitle} placeholder='New tag title' />
            </label>
            <label>
                Color*
                <Select onChange={onChangeTagColor}>
                    <SelectOption color='#ffffff' disabled defaultValue='Choose new tag color'></SelectOption>
                    {colors.map(color => <SelectOption key={color} color={color} value={color}>{color}</SelectOption>)}
                </Select>
            </label>
            <Button type='submit' disabled={!Boolean(tagTitle) || !Boolean(tagColor)} onClick={onSubmit}>Create Tag</Button>
            
            
        </Form>
    )
}

export default ChangeTagsForm