import React from 'react'
import { useSelector } from 'react-redux'
import DateTimeBlock from '../../components/DateTimeBlock/DateTimeBlock'
import ToDoList from '../../components/ToDoList/ToDoList'
import { RowStyledSection } from '../../shared/StyledSection'
import Title from '../../shared/Title/Title'
import { finishedTodosSelector, unfinishedTodosSelector } from '../../store/todos/selectors'
import { StyledDashboard } from './styled'



function Dashboard() {
    const finishedTasks = useSelector(finishedTodosSelector)
    const unfinishedTasks = useSelector(unfinishedTodosSelector)
    return (
        <StyledDashboard>
            <RowStyledSection>
                <Title>Hey, You!</Title>
                <DateTimeBlock/>
            </RowStyledSection>
                <ToDoList
                    taskList={finishedTasks}
                    isEditable={false}
                    emptyText='You don`t have completed tasks yet'
                    title='Completed Tasks'
                />
                <ToDoList
                    taskList={unfinishedTasks}
                    isEditable={false}
                    emptyText='You don`t have uncompleted tasks'
                    title='Tasks in progress'
                />
        </StyledDashboard>
    )
}

export default Dashboard