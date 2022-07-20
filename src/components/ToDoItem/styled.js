import styled from 'styled-components'

export const StyledToDoItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 4px;
    background-color: transparent;
    `

export const ToDoContent = styled.div`
    cursor: ${(props) => props.isEditable ? 'pointer' : 'auto'};
    text-decoration: ${(props) => (props.isCompleted && props.isEditable ? 'line-through' : 'none')};
    text-align: start;
    display: flex;
    align-items: center;
    gap: 16px;`

export const TagMarkersList = styled.ul`
        display: flex;
        gap: 8px;
        flex-grow: 1;`

export const IconsWrapper = styled.div`
    display: flex;
    gap: 12px;`