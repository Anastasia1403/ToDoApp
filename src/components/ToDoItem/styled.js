import styled from 'styled-components'

export const StyledToDoItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px;
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
    border-radius: 4px;
    &:hover {
        background-color: #ecddf1;
    }`

export const ToDoContent = styled.div`
    cursor: pointer;
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
    text-align: start;`


export const TagMarker = styled.div`
    width: 8px;
    height: 8px;
    background-color: ${(props) => (props.color)};
    border-radius: 50%;
    cursor: pointer;
    text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
    position: relative;`

export const Tooltip = styled.span`
    visibility: hidden;
    background-color: #6a6a6a;
    color: #fff;
    text-align: center;
    padding: 2px 8px;
    border-radius: 6px;
    position: absolute;
    top: 150%;
    left: 50%;
    z-index: 1;
    
    ${TagMarker}:hover & {
        visibility: visible;
    }`

export const TagMarkersList = styled.ul`
        display: flex;
        gap: 8px;
        flex-grow: 1;`

export const DeleteButton = styled.button`
    color: #cd4848;
    background-color: transparent;
    border: none;
    `