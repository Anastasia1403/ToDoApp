import React from 'react';
import { ButtonsWrapper } from '../../shared/ButtonsWrapper';
import Button from '../../shared/Button/Button';
import { TagsList } from '../TaskForm/styled';
import TagItem from '../../shared/TagItem/TagItem';
import { InfoWrapper } from './styled'
import { useDispatch, useSelector } from 'react-redux';
import { currentTodoSelector } from '../../store/todos/selectors';
import { tagsArrayByIdSelector } from '../../store/tags/selectors';
import { deleteTodoAction } from '../../store/todos/actions';

function TaskInfo({currentToDoId=null, onToggleEditMode, onChangeCurrentToDo}) {

    const currentToDo = useSelector(currentTodoSelector(currentToDoId))
    const currentTags = useSelector(tagsArrayByIdSelector(currentToDo.tags))

    const dispatch = useDispatch()

    const handleDeleteTask = (e) => {
        onChangeCurrentToDo('')
        dispatch(deleteTodoAction(currentToDoId))
    }

    return (
        <>
            <InfoWrapper>
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

            </InfoWrapper>
            <ButtonsWrapper>
                <Button onClick={onToggleEditMode}>edit task</Button>
                <Button onClick={handleDeleteTask}>delete task</Button>
            </ButtonsWrapper>
            
        </>
    )
}

export default TaskInfo