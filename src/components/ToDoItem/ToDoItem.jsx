import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagsSelector } from '../../store/tags/selectors';
import { deleteTodoAction, toggleTodoAction } from '../../store/todos/actions';
import TagItem from '../../shared/TagItem/TagItem';
import { StyledToDoItem,
        ToDoContent,
        TagMarkersList,
        DeleteButton } from './styled'

const ToDoItem = ({ todo, id, onChangeCurrentToDo, isActive, currentToDoId }) => {
    const tagsList = useSelector(tagsSelector)
    const dispatch = useDispatch()
    function handleChangeCurrentToDo() {
        onChangeCurrentToDo(id)
    }
    function handleDeleteTodo (e) {
        e.stopPropagation();
        if (id === currentToDoId) {
            onChangeCurrentToDo('')
        }
        dispatch(deleteTodoAction(id))
    }
    function handleToggleTodo (e) {
        e.stopPropagation();
        dispatch(toggleTodoAction(id))
    }
    return (
        <StyledToDoItem isActive={isActive} onClick={handleChangeCurrentToDo}>
            <div>
                <ToDoContent
                    isCompleted={todo.isCompleted}
                    onClick={handleToggleTodo}
                >
                    <input readOnly checked={todo.isCompleted} type="checkbox"/>
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
            <DeleteButton onClick={handleDeleteTodo}>✖</DeleteButton>
        </StyledToDoItem>
    )
};

export default ToDoItem;
