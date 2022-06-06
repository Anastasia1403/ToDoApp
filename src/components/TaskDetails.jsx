import React from 'react';
import { StyledSection } from "../shared/StyledSection";


const TaskDetails = ({ currentToDo }) => {
    
    return (
        <StyledSection>
            <h3>Task Details</h3>
            <div>{currentToDo.content}</div>
            <div>{currentToDo.note}</div>
            <div>{currentToDo.tags}</div>
            <div>{currentToDo.isCompleted}</div>
            
        </StyledSection>
    );
}
 
export default TaskDetails;