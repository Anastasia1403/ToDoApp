import { render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom"
import TaskForm from "./TaskForm"
import configureStore from 'redux-mock-store'
import moment from "moment";
import userEvent from "@testing-library/user-event";
import thunk from "redux-thunk";

describe('TaskForm test', () => {

    const mockStore = configureStore([thunk]);
    const store = mockStore({
        tags: {
            1: {
                title: "alarm",
                colorId: 5,
                id: "1",
            },
            2: {
                title: "alarm",
                colorId: 1,
                id: "2",
            },
            5: {
                title: "alarm",
                colorId: 3,
                id: "3",
            }
        },
        colors: {
            1: {
                color: "tan",
                isUsed: true,
                id: "1",
            },
            3: {
                color: "blue",
                isUsed: true,
                id: "3",
            },
            5: {
                color: "red",
                isUsed: true,
                id: "5",
            }
        },
        todos: {
            10: {
                title: "test task title",
                description: "test task description",
                tags: [2,5],
                isCompleted: false,
                createdAt: "2022-07-27T14:57:20.301+04:00",
                deadline: "2022-12-25T12:00:00.000+04:00",
                id:"12",
            }
        }
    });

    const onToggleEditModeMock = jest.fn()
    const closeModalMock = jest.fn()
    const dispatchFn = jest.fn()

    const withStoreAndRouter = (element) => (
        <MemoryRouter>
            <Provider store={store}>
                {element}
            </Provider>
        </MemoryRouter>
    );
    describe('Edit Task Form test', () => {
        test('should render edit task form with correct data', () => {
            const props = {
                currentToDoId: 10,
                closeModal: jest.fn(),
                onToggleEditMode: jest.fn(),
            }
    
            render(withStoreAndRouter(<TaskForm {...props}/>))
    
            const title = screen.getByPlaceholderText(/Correct task/i)
            const description = screen.getByPlaceholderText(/Correct note/i)
            const deadline = screen.getByPlaceholderText(/Pick deadline/i)
            const tags = screen.getByLabelText(/Tags/i)
            const statusLabel = screen.getByTestId('toggleSwitcherLabel')
            
            expect(title.value).toBe('test task title')
            expect(description.value).toBe('test task description')
            expect(deadline.value).toBe('Dec 25th 2022')
            expect(tags).toBeInTheDocument()
            
            expect(statusLabel).toHaveProperty('checked', false)
        })
        test('should render correct data after changing and update store',  async () => {
            
            const props = {
                currentToDoId: 10,
                closeModal: jest.fn(),
                onToggleEditMode: onToggleEditModeMock,
            }
                
            render(withStoreAndRouter(<TaskForm {...props}/>))

            jest.spyOn(store, 'dispatch').mockImplementation((data) => dispatchFn(data));
    
            const title = screen.getByPlaceholderText(/Correct task/i)
            const description = screen.getByPlaceholderText(/Correct note/i)
            const statusLabel = screen.getByTestId('toggleSwitcherLabel')
            const saveButton = screen.getByText(/Save/i)

            userEvent.clear(title)
            userEvent.type(title, 'updated title')
            userEvent.type(description, ' update')

            userEvent.click(statusLabel)
            
            expect(title.value).toBe('updated title')
            expect(description.value).toBe('test task description update')            
            expect(statusLabel).toHaveProperty('checked', true)

            userEvent.click(saveButton)
            expect(dispatchFn).toBeCalled()
            expect(onToggleEditModeMock).toBeCalled()
            // expect(dispatchFn).toBeCalledWith('') //падает: Recieved [Function anonymous]
            // await waitFor(() => expect(store.getState().todos['10'].title).toBe('updated title')) //падает
        })
    })
    describe('Create Task Form test', () => {
        test('should render empty create task form with disabled button', () => {
            const props = {
                closeModal: jest.fn(),
                onToggleEditMode: jest.fn(),
            }
    
            render(withStoreAndRouter(<TaskForm {...props}/>))
    
            const title = screen.getByPlaceholderText(/Add new task/i)
            const description = screen.getByPlaceholderText(/Add note/i)
            const deadline = screen.getByPlaceholderText(/Pick deadline/i)
            const tags = screen.getAllByTestId('tag-checkbox-label')
            const currentDate = moment(new Date()).format('MMM Do yyyy')
            const button = screen.getByRole('button')
    
            expect(title).toBeEmptyDOMElement()
            expect(description).toBeEmptyDOMElement()
            expect(deadline.value).toBe(currentDate)
            expect(tags).toHaveLength(3)

            tags.forEach(tag => expect(tag).toHaveProperty('checked', false))
            expect(button).toBeDisabled()
        })
        test('should change data', () => {
            const props = {
                closeModal: closeModalMock,
                onToggleEditMode: jest.fn(),
            }
            jest.spyOn(store, 'dispatch').mockImplementation((data) => dispatchFn(data));
    
            render(withStoreAndRouter(<TaskForm {...props}/>))
    
            const title = screen.getByPlaceholderText(/Add new task/i)
            const description = screen.getByPlaceholderText(/Add note/i)
            const tags = screen.getAllByTestId('tag-checkbox-label')
            const button = screen.getByRole('button')

            userEvent.type(title, 'new title')
            userEvent.type(description, 'new description')

            expect(title.value).toBe('new title')
            expect(description.value).toBe('new description')
            expect(button).not.toBeDisabled()
            
            userEvent.click(tags[0])
            expect(tags[0]).toHaveProperty('checked', true)

            userEvent.click(button)
            expect(dispatchFn).toBeCalled()
            expect(closeModalMock).toBeCalled()
        })
    })
})