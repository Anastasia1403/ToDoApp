import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { LinkTaskButton } from '../shared/IconButton';
import { StyledSection } from '../shared/StyledSection';
import { ReactComponent as BackIcon } from '../assets/svg/back-icon.svg';
import TaskForm from '../components/TaskForm/TaskForm';
import TaskInfo from '../components/TaskInfo/TaskInfo';
import Title from '../shared/Title/Title';

function TaskItemPage() {
	let id = Number(useParams().id);
	
    const [isEditMode, setIsEditMode] = useState(false)

    const onToggleEditMode = () => {
        setIsEditMode(!isEditMode)
    }   

    return (
        <StyledSection>
            <LinkTaskButton to='/tasks'><BackIcon/></LinkTaskButton>
            <Title>Task Details</Title>       
            
            {!isEditMode ? id && 
            <TaskInfo
                onToggleEditMode={onToggleEditMode}
                currentToDoId={id}
                /> : 
            <TaskForm
                onToggleEditMode={onToggleEditMode}
                currentToDoId={id}
            />            
            }
        </StyledSection>
    );
}

export default TaskItemPage