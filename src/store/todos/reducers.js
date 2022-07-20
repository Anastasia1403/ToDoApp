const initialState = {
    1: {
        title: 'Send invoice',
        description: 'fill the form and to accountant',
        isCompleted: false,
        tags: [ "1" ],
    }, 
    2: {
        title: 'Go shopping',
        description: 'buy milk, bread, vegetables',
        isCompleted: true,
        tags: [ "3", "4" ],
    },
    3: {
        title: 'Do cleaning',
        description: '',
        isCompleted: false,
        tags: [ "4" ],
    },
    4: {
        title: 'Visit doctor',
        description: '',
        isCompleted: true,
        tags: [],
    },
    5: {
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isCompleted: false,
        tags: [ "2", "3", "4" ],
    }
}

const todoReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'todo/add':
            const id = Date.now();
            newState[id] = {
                title: action.payload.title,
                description: action.payload.description,
                isCompleted: false,
                tags: action.payload.tags,
            }
            return newState
        case 'todo/delete':
            delete newState[action.payload]
            return newState
        case 'todo/toggle':
            newState[action.payload].isCompleted = !newState[action.payload].isCompleted
            return newState
        case 'todo/edit':
            newState[action.payload.id] = {
                ...newState[action.payload.id],
                ...(action.payload.title && {title: action.payload.title}),
                ...(action.payload.description && {description: action.payload.description}),
                ...(action.payload.hasOwnProperty('isCompleted') && {isCompleted: action.payload.isCompleted }),
                ...(action.payload.tags && {tags: action.payload.tags}),
            }
            return newState
        default:
            return state
    }
}

export default todoReducer;