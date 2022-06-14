import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAction, toggleTodoAction } from '../../store/todos/action';
import TagItem from '../TagItem/TagItem';
// import { defaultTagsArray } from "./../../helpers/constants";
import { StyledToDoItem,
        ToDoContent,
        TagMarkersList,
        DeleteButton } from './styled'

const ToDoItem = ({ todo, isCompleted, id, tags, onChangeCurrentToDo, currentToDoId }) => {
    const tagsList = useSelector(state => state.tags)

    const dispatch = useDispatch()
    function handleChangeCurrentToDo(id) {
        onChangeCurrentToDo(id)
    }

    return (
        <StyledToDoItem isCurrent={currentToDoId === id} onClick={() => handleChangeCurrentToDo(id)}>
            <div>
                <ToDoContent
                    isCompleted={isCompleted}
                    onClick={() => dispatch(toggleTodoAction(id))}
                >
                    <input checked={isCompleted} type="checkbox"/>
                    {todo}
                </ToDoContent>
                <TagMarkersList>
                    {tags.map(tagId =>
                    <TagItem 
                        size='small'
                        key={tagId}
                        color={tagsList[tagId].color}
                    >
                        {tagsList[tagId].title}
                    </TagItem>
                    )}
                </TagMarkersList>
            </div>
            <DeleteButton onClick={() => dispatch(deleteTodoAction(id))}>✖</DeleteButton>
        </StyledToDoItem>
    )
};

export default ToDoItem;
