import styled from 'styled-components'

export const StyledToDoItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px;
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
    border-radius: 4px;
    cursor: pointer;
    background-color: ${props => props.isActive ? '#caa0d8' : 'transparent'};
    &:hover {
        background-color: ${props => props.isActive ? '#caa0d8' : '#ecddf1'};
    }`

export const ToDoContent = styled.div`
    cursor: pointer;
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
    text-align: start;
    display: flex;
    align-items: center;
    gap: 16px;`

export const TagMarkersList = styled.ul`
        display: flex;
        gap: 8px;
        flex-grow: 1;`

export const DeleteButton = styled.button`
    color: #cd4848;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        transform: scale(1.3);
    }
    `