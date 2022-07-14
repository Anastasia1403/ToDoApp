import React from 'react';
import { StyledSection } from "../../shared/StyledSection";
import Title from '../../shared/Title/Title';
import { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskInfo from '../TaskInfo/TaskInfo';



const TaskDetails = ({ currentToDoId, onChangeCurrentToDo }) => {

    const [isEditMode, setIsEditMode] = useState(false)

    const onToggleEditMode = () => {
        setIsEditMode(!isEditMode)
    }   

    return (
        <StyledSection>
            <Title>Task Details</Title>
            
            {!isEditMode ? currentToDoId && 
            <TaskInfo
                onToggleEditMode={onToggleEditMode}
                onChangeCurrentToDo={onChangeCurrentToDo}
                currentToDoId={currentToDoId}
                /> : 
            <TaskForm
                onToggleEditMode={onToggleEditMode}
                currentToDoId={currentToDoId}
            />            
            }
        </StyledSection>
    );
}


export default TaskDetails;