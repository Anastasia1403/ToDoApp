import { render, screen } from "@testing-library/react"
import ToggleSwitcher from "./ToggleSwitcher"
import userEvent from '@testing-library/user-event';

describe('ToggleSwitcher component', () => {
    test('onChange fn should be called', () => {
        const onChangeMock = jest.fn()
        const props = {
            onChange: onChangeMock,
            isChecked: true,
        }
        render(<ToggleSwitcher {...props}/>)
        const label = screen.getByTestId('toggleSwitcherLabel')
        userEvent.click(label)

        expect(onChangeMock).toBeCalled()
    })
    test('should label have checked property', () => {
        const onChangeMock = jest.fn()
        const props = {
            onChange: onChangeMock,
            isChecked: true,
        }
        render(<ToggleSwitcher {...props}/>)
        const label = screen.getByTestId('toggleSwitcherLabel')
        expect(label).toHaveProperty('checked', true)
    })
})