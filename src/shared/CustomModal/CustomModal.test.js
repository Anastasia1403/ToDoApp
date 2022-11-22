import { screen, render } from "@testing-library/react"
import CustomModal from "./CustomModal"
import userEvent from '@testing-library/user-event';

describe('Custom Modal Component', () => {

    test('should render custom modal', () => {
        const closeModalFn = jest.fn()
        const props = {
            closeModal: closeModalFn,
            modalIsOpen: true,
            title: 'Test title'
        }
        render(<CustomModal {...props}><div>test data</div></CustomModal>)
        const title = screen.getByRole('heading', {level: 3})
        const modal = screen.getByRole('dialog')
        const childrenText = screen.getByText(/test data/i)

        expect(title.textContent).toBe('Test title')
        expect(modal).toBeInTheDocument()
        expect(childrenText).toBeInTheDocument()

    })
    test('should call close fn onclick close button', () => {
        const closeModalFn = jest.fn()
        const props = {
            closeModal: closeModalFn,
            modalIsOpen: true,
            title: 'Test title'
        }
        render(<CustomModal {...props}><div>test data</div></CustomModal>)
        const closeButton = screen.getByRole('button')

        userEvent.click(closeButton)
        expect(closeModalFn).toBeCalled()

    })
}) 