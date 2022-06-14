import React from 'react';
import { useSelector } from 'react-redux';
import { StyledSection } from "../../shared/StyledSection";
import TagItem from '../TagItem/TagItem';
import { TaskInfo } from './styled';


const TaskDetails = ({ currentToDo, currentToDoId }) => {
    const currentTags = useSelector(state => {
        return currentToDoId ? currentToDo.tags.map(id => state.tags[id]) : []
    })
    
    return (
        <StyledSection>
            <h3>Task Details</h3>
            {currentToDoId && <TaskInfo>
                <h5>Task</h5>
                <div>{currentToDo?.title}</div>
                <h5>Description</h5>
                <div>{currentToDo?.description}</div>
                <h5>Tags</h5>
                <ul>{currentTags?.map(tag => <TagItem size='small' color={tag.color}>{tag.title}</TagItem>)}</ul>
                <h5>Status</h5>
                <div>{currentToDo?.isCompleted ? 'DONE' : 'IN PROGRESS'}</div>   
            </TaskInfo> }
        </StyledSection>
    );

}
 
export default TaskDetails;