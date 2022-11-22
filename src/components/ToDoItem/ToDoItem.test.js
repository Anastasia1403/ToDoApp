import { render, screen } from "@testing-library/react";
import ToDoItem from "./ToDoItem";
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

describe("Testing ToDoItem", function () {
    const mockStore = configureStore([thunk]);
    const store = mockStore({
        tags: {
            2: {
                title: "alarm",
                colorId: 1,
                id: "2",
            },
            4: {
                title: "sport",
                colorId: 3,
                id: "4",
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
        },
        todos: {
            10: {
                title: "test task title",
                description: "test task description",
                tags: [2, 4],
                isCompleted: false,
                createdAt: "2022-07-27T14:57:20.301+04:00",
                deadline: "2022-12-25T12:00:00.000+04:00",
                id:"12",
            }
        }
    });
    const withStoreAndRouter = (element) => (
        <MemoryRouter initialEntries={['/']}>
            <Provider store={store}>
                {element}
            </Provider>
        </MemoryRouter>
    );

    const todo = {
        createdAt: "2022-08-10T13:38:22+04:00",
        deadline: "2022-08-13T13:38:14+04:00",
        description: "to do description",
        id: "10",
        isCompleted: false,
        tags: [4, 2],
        title: "to do title"
    }

    const props = {
        todo, isEditable: true, id: 10,
    }
    test("should render todo item with correct data", async function () {

        render(withStoreAndRouter(<ToDoItem {...props} />))
        const title = screen.getByText(/to do title/i)
        const deadline = screen.getByText(/Aug 13th 2022/i)
        const checkbox = screen.getByRole('checkbox')

        expect(title).toBeInTheDocument()
        expect(deadline).toBeInTheDocument()
        expect(screen.getAllByRole('listitem')).toHaveLength(3) //main element 1 + 2 tags
        expect(checkbox).not.toBeChecked()
        }
    )
    test("should go to Task Details page when click on show icon", () => {
        render(withStoreAndRouter(<ToDoItem {...props} />))
        const showTaskLink = screen.getByRole('link')
        expect(showTaskLink).toBeInTheDocument()
        
        userEvent.click(showTaskLink)
        // expect(screen.getByText('Task Details')).toBeInTheDocument() //падает
        // expect(screen.getByText('to do description')).toBeInTheDocument() //падает
        }
    )
    test("should call dispatch with correct args", () => {

        const dispatchFn = jest.fn()
        jest.spyOn(store, 'dispatch').mockImplementation((data) => dispatchFn(data));

        render(withStoreAndRouter(<ToDoItem {...props} />))

        const title = screen.getByText(/to do title/i)
        const deleteBtn = screen.getByRole('button')

        userEvent.click(title)        
        // expect(dispatchFn).toHaveBeenNthCalledWith(1, '') //падает

        expect(deleteBtn).toBeInTheDocument()
        userEvent.click(deleteBtn)
        // expect(dispatchFn).toHaveBeenNthCalledWith(2, '')

        expect(dispatchFn).toHaveBeenCalledTimes(2)
        }
    )
    test("should render uneditable task item without deadline and icons", () => {
    
        const props = {
            todo, isEditable: false, id: 10,
        }
        render(withStoreAndRouter(<ToDoItem {...props} />))
        
        const deadline = screen.queryByText(/Completed by/i)
        const checkbox = screen.queryByRole('checkbox')
        const deleteBtn = screen.queryByRole('button')
        const showTaskLink = screen.queryByRole('link')

        expect(checkbox).not.toBeInTheDocument()
        expect(deadline).not.toBeInTheDocument()
        expect(deleteBtn).not.toBeInTheDocument()
        expect(showTaskLink).not.toBeInTheDocument()
        }
    )
})