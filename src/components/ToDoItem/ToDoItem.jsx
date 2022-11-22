import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagsArrayByIdSelector } from '../../store/tags/selectors';
import TagItem from '../../shared/TagItem/TagItem';
import { StyledToDoItem,
        ToDoContent,
        TagMarkersList, 
        IconsWrapper,
        DeadlineBlock,
        ToDoText} from './styled'
import { LinkTaskButton, TaskButton } from '../../shared/IconButton';
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete-icon.svg';
import { ReactComponent as ShowIcon } from '../../assets/svg/show-icon.svg';
import { ReactComponent as ImportantIcon } from '../../assets/svg/important-icon.svg';
import { deleteTask, editTask } from '../../store/todos/thunk';
import { calcDaysDifference, formatDate, getDeadlineColor } from '../../helpers/date-time-func';


const ToDoItem = ({ todo, id, isEditable }) => { 
    const tagsList = useSelector(tagsArrayByIdSelector(todo.tags))
    const dispatch = useDispatch()

    const daysToDeadline = calcDaysDifference(todo.deadline, new Date())
    const colorDaysToDeadline = getDeadlineColor(daysToDeadline)

    function handleDeleteTodo (e) {
        e.stopPropagation();
        dispatch(deleteTask(id))
    }
    function handleToggleTodo (e) {
        if (isEditable) {
            e.stopPropagation();
            dispatch(editTask({ id: id, isCompleted: !todo.isCompleted}))
        }
    }
    return (
        <StyledToDoItem>
            <ToDoContent>
                <ToDoText
                    isCompleted={todo.isCompleted}
                    isEditable={isEditable}
                    onClick={handleToggleTodo}
                >
                    {isEditable && <input readOnly checked={todo.isCompleted} type="checkbox"/>}
                    {todo.title}
                </ToDoText>
                <TagMarkersList>
                    {Boolean(tagsList.length) && tagsList.map(tag =>
                        <TagItem 
                            size='small'
                            key={tag.id}
                            tag={tag}
                            />
                        )}
                </TagMarkersList>
                {
                    !todo.isCompleted &&
                    <DeadlineBlock color={colorDaysToDeadline}>
                        {(daysToDeadline < 0) && <ImportantIcon />}
                        Сomplete by:  
                        <span>{formatDate(todo.deadline)}</span>
                    </DeadlineBlock>
                }
                
            </ToDoContent>
            {isEditable && 
            <IconsWrapper>
                <TaskButton onClick={handleDeleteTodo}><DeleteIcon /></TaskButton>
                <LinkTaskButton to={`/tasks/${id}`}><ShowIcon /></LinkTaskButton>
            </IconsWrapper>}
            
            
        </StyledToDoItem>
    )
};

export default ToDoItem;
