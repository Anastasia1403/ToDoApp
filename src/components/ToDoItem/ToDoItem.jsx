import React from 'react';
import { StyledToDoItem,
        ToDoContent,
        TagMarker,
        Tooltip,
        TagMarkersList,
        DeleteButton } from './styled'

const ToDoItem = ({ editToDo, todo, isCompleted, deleteToDo, id, tagsTypes, tags, onChangeCurrentToDo }) => {
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
                        <TagMarker 
                            key={tag} 
                            color={tagsTypes.find(tagType => tagType.title === tag).color}
                        >
                            <Tooltip>{tag}</Tooltip>
                        </TagMarker>
                    )}
                </TagMarkersList>
            </div>
            <DeleteButton onClick={handleDelete}>✖</DeleteButton>
        </StyledToDoItem>
    )
};

export default ToDoItem;
