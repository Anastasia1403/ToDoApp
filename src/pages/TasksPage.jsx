import React from 'react'
import { useSelector } from 'react-redux'
import ToDoList from '../components/ToDoList/ToDoList'
import { todosSelector } from '../store/todos/selectors'

function TasksPage() {
    const taskList = useSelector(todosSelector)
    return (    
        <ToDoList
            taskList={taskList}
            isEditable
            emptyText='What do you want to do?'
        />
    )
}

export default TasksPage