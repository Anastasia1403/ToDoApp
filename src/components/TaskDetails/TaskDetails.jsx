import React from 'react';
import { useSelector } from 'react-redux';
import { StyledSection } from "../../shared/StyledSection";
import { tagsByIdSelector } from '../../store/tags/selectors';
import TagItem from '../../shared/TagItem/TagItem';
import { TaskInfo } from './styled';
import Title from '../../shared/Title/Title';
import { currentTodoSelector } from '../../store/todos/selectors';


const TaskDetails = ({ currentToDoId }) => {
    const currentToDo = useSelector(currentTodoSelector(currentToDoId))
    const currentTags = useSelector(tagsByIdSelector(currentToDo.tags))
    return (
        <StyledSection>
            <Title>Task Details</Title>
            {currentToDoId && <TaskInfo>
                <h5>Task</h5>
                <div>{currentToDo.title}</div>
                <h5>Description</h5>
                <div>{currentToDo.description}</div>
                <h5>Tags</h5>
                <ul>{currentTags.map(tag => <TagItem key={tag.title} size='small' tag={tag}/>)}</ul>
                <h5>Status</h5>
                <div>{currentToDo.isCompleted ? 'DONE' : 'IN PROGRESS'}</div>   
            </TaskInfo> }
        </StyledSection>
    );

}
 
export default TaskDetails;