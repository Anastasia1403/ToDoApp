import React from 'react'
import { Checkbox, CheckboxLabel, Inner, Switch, ToggleContainer } from './styled'

function ToggleSwitcher({ onChange, isChecked}) {
    return (
        <ToggleContainer>
            <Checkbox type='checkbox' name="toggleSwitch" id="toggleSwitch" onChange={onChange} checked={isChecked}/>
            <CheckboxLabel htmlFor="toggleSwitch" checked={isChecked}>
                <Inner></Inner>
                <Switch></Switch>
            </CheckboxLabel>
        </ToggleContainer>
    )
}

export default ToggleSwitcher