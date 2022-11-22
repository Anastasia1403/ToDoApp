import { render, screen } from "@testing-library/react"
import ToDoList from "./ToDoList";
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';


describe('ToDoList component', () => {

    const mockStore = configureStore();
    const store = mockStore({
        tags: {},
        todos: {},
        colors: {}
    });
    const withStoreAndRouter = (element) => (
        <MemoryRouter>
            <Provider store={store}>
                {element}
            </Provider>
        </MemoryRouter>
    );

    test('should render title and empty text if there are no tasks', () => {
        const props = {
            taskList: {},
            emptyText: 'test empty text',
            title: "test title",
        }
        
        render(<ToDoList {...props}/>)

        const title = screen.getByText(/test title/i)
        const emptyText = screen.getByText(/test empty text/i)
        const total = screen.queryByText(/Total:/i)
        const newTaskButton = screen.queryByRole('button')

        expect(title).toBeInTheDocument()
        expect(emptyText).toBeInTheDocument()
        expect(total).not.toBeInTheDocument()
        expect(newTaskButton).not.toBeInTheDocument()

    })

    test('should render 2 task and button', () => {
        const props = {
            taskList: {
                1: {
                    createdAt: "2022-07-27T14:57:20.301+04:00",
                    deadline: "2022-08-03T08:00:00.000+04:00",
                    description: "",
                    id: "1",
                    isCompleted: false,
                    tags: [],
                    title: "test to do 1",
                },
                10: {
                    createdAt: "2022-07-27T14:57:20.301+04:00",
                    deadline: "2022-08-03T08:00:00.000+04:00",
                    description: "",
                    id: "10",
                    isCompleted: true,
                    tags: [],
                    title: "test to do 2",
                },
            },
            emptyText: 'test empty text',
            title: "test title",
            isEditable: true
        }
        
        render(withStoreAndRouter(<ToDoList {...props}/>))

        const title = screen.getByText(/test title/i)
        const emptyText = screen.queryByText(/test empty text/i)
        const total = screen.queryByText(/Total: 2 tasks/i)
        const newTaskButton = screen.getByText(/Create New Task/i)
        const listItems = screen.getAllByRole('listitem')

        expect(title).toBeInTheDocument()
        expect(emptyText).not.toBeInTheDocument()
        expect(total).toBeInTheDocument()
        expect(newTaskButton).toBeInTheDocument()
        expect(listItems).toHaveLength(2)
    })
    test('should open modal on click button', () => {
        const props = {
            taskList: {
                1: {
                    createdAt: "2022-07-27T14:57:20.301+04:00",
                    deadline: "2022-08-03T08:00:00.000+04:00",
                    description: "",
                    id: "1",
                    isCompleted: false,
                    tags: [],
                    title: "test to do 1",
                },
                10: {
                    createdAt: "2022-07-27T14:57:20.301+04:00",
                    deadline: "2022-08-03T08:00:00.000+04:00",
                    description: "",
                    id: "10",
                    isCompleted: true,
                    tags: [],
                    title: "test to do 2",
                },
            },
            emptyText: 'test empty text',
            title: "test title",
            isEditable: true
        }
        
        render(withStoreAndRouter(<ToDoList {...props}/>))

        const newTaskButton = screen.getByText(/Create New Task/i)
        userEvent.click(newTaskButton)
        expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
})