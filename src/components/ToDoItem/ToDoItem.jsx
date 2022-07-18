import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagsSelector } from '../../store/tags/selectors';
import { deleteTodoAction, toggleTodoAction } from '../../store/todos/actions';
import TagItem from '../../shared/TagItem/TagItem';
import { StyledToDoItem,
        ToDoContent,
        TagMarkersList, 
        IconsWrapper} from './styled'
import { LinkTaskButton, TaskButton } from '../../shared/IconButton';
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete-icon.svg';
import { ReactComponent as ShowIcon } from '../../assets/svg/show-icon.svg';

const ToDoItem = ({ todo, id, isEditable }) => {
    const tagsList = useSelector(tagsSelector)
    const dispatch = useDispatch()
    function handleDeleteTodo (e) {
        e.stopPropagation();
        dispatch(deleteTodoAction(id))
    }
    function handleToggleTodo (e) {
        e.stopPropagation();
        dispatch(toggleTodoAction(id))
    }
    return (
        <StyledToDoItem>
            <div>
            <ToDoContent
                    isCompleted={todo.isCompleted}
                    isEditable={isEditable}
                    onClick={isEditable && handleToggleTodo}
                >
                    {isEditable && <input readOnly checked={todo.isCompleted} type="checkbox"/>}
                    {todo.title}
                </ToDoContent>
                <TagMarkersList>
                {Boolean(todo.tags.length) && todo.tags.map(tagId =>
                    <TagItem 
                        size='small'
                        key={tagId}
                        tag={tagsList[tagId]}
                    />                    
                    )}
                </TagMarkersList>
            </div>
            {isEditable && 
            <IconsWrapper>
                <TaskButton onClick={handleDeleteTodo}><DeleteIcon /></TaskButton>
                <LinkTaskButton to={`/tasks/${id}`}><ShowIcon /></LinkTaskButton>
            </IconsWrapper>}
            
            
        </StyledToDoItem>
    )
};

export default ToDoItem;
