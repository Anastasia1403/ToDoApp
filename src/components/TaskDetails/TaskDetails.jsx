import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSection } from "../../shared/StyledSection";
import { tagsByIdSelector } from '../../store/tags/selectors';
import TagItem from '../../shared/TagItem/TagItem';
import { TaskInfo } from './styled';
import Title from '../../shared/Title/Title';
import { currentTodoSelector } from '../../store/todos/selectors';
import { useState } from 'react';
import { TagsList } from '../TaskForm/styled';
import TaskForm from '../TaskForm/TaskForm';
import Button from '../../shared/Button/Button';
import { deleteTodoAction } from '../../store/todos/actions';
import { ButtonsWrapper } from '../../shared/ButtonsWrapper';


const TaskDetails = ({ currentToDoId, onChangeCurrentToDo }) => {

    const dispatch = useDispatch()

    const [isEditMode, setIsEditMode] = useState(false)

    const currentToDo = useSelector(currentTodoSelector(currentToDoId))
    const currentTags = useSelector(tagsByIdSelector(currentToDo.tags))

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode)
    }   
    function deleteTask (e) {
        onChangeCurrentToDo('')
        dispatch(deleteTodoAction(currentToDoId))
    }

    return (
        <StyledSection>
            <Title>Task Details</Title>
            
            {!isEditMode ? currentToDoId && 
            <>
                <TaskInfo>
                    <h5>Task</h5>
                    <div>{currentToDo.title}</div>

                    <h5>Description</h5>
                    <div>{currentToDo.description}</div>

                    <h5>Tags</h5>
                    <TagsList>{currentTags.map(tag =>
                        <TagItem key={tag.title} size='small' tag={tag}/>)}
                    </TagsList>

                    <h5>Status</h5>
                    <div>{currentToDo.isCompleted ? 'DONE' : 'IN PROGRESS'}</div>   

                </TaskInfo>
                <ButtonsWrapper>
                    <Button onClick={toggleEditMode}>edit task</Button>
                    <Button onClick={deleteTask}>delete task</Button>
                </ButtonsWrapper>
                
            </> : 
            <TaskForm toggleEditMode={toggleEditMode} currentToDoId={currentToDoId}/>            
            }
        </StyledSection>
    );
}


export default TaskDetails;