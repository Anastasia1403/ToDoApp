import React from 'react'
import { Checkbox, CheckboxLabel, Inner, Switch, ToggleContainer } from './styled'

function ToggleSwitcher({ onChange, isChecked}) {
    return (
        <ToggleContainer>
            <Checkbox type='checkbox' name="toggleSwitch" id="toggleSwitch" onChange={onChange} checked={isChecked}/>
            <CheckboxLabel
                data-testid="toggleSwitcherLabel"
                htmlFor="toggleSwitch"
                checked={isChecked}
            >
                <Inner data-done='DONE' data-in-progress='IN PROGRESS'></Inner>
                <Switch></Switch>
            </CheckboxLabel>
        </ToggleContainer>
    )
}

export default ToggleSwitcher