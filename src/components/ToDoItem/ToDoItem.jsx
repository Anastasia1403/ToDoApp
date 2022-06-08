import React from 'react';
import TagItem from '../TagItem/TagItem';
import { defaultTagsArray } from "./../../helpers/constants";
import { StyledToDoItem,
        ToDoContent,
        TagMarkersList,
        DeleteButton } from './styled'

const ToDoItem = ({ editToDo, todo, isCompleted, deleteToDo, id, tags, onChangeCurrentToDo }) => {
    function handleDelete() {
        deleteToDo(id)
    }
    function handleEdit() {
        editToDo(id)
    }
    function handleChangeCurrentToDo() {
        onChangeCurrentToDo(id)
    }

    return (
        <StyledToDoItem onClick={handleChangeCurrentToDo}>
            <div>
                <ToDoContent
                    isCompleted={isCompleted}
                    onClick={handleEdit}
                >
                    {todo}
                </ToDoContent>
                <TagMarkersList>
                    {tags.map(tag =>
                    <TagItem 
                        size='small'
                        key={tag}
                        color={defaultTagsArray.find(tagType => tagType.title === tag).color}
                        title={tag}
                    >{tag}</TagItem>
                    )}
                </TagMarkersList>
            </div>
            <DeleteButton onClick={handleDelete}>✖</DeleteButton>
        </StyledToDoItem>
    )
};

export default ToDoItem;
