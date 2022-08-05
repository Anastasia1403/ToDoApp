import styled from 'styled-components'

export const StyledToDoItem = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 4px;
    background-color: transparent;
        &:not(:last-child):after {
            position: absolute;
            content: '';
            height: 1px;
            width: 96%;
            background-color: #e0d1c7;
            bottom: 0;
            left: 2%;
        }
    
    `

export const ToDoContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

`
export const ToDoText = styled.div`
    cursor: ${(props) => props.isEditable ? 'pointer' : 'auto'};
    text-decoration: ${(props) => (props.isCompleted && props.isEditable ? 'line-through' : 'none')};
    text-align: start;
    display: flex;
    align-items: center;
    gap: 16px;`

export const TagMarkersList = styled.ul`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        flex-grow: 1;`

export const IconsWrapper = styled.div`
    display: flex;
    gap: 12px;`

export const DeadlineBlock = styled.div`
    font-size: 12px;
    font-style: italic;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 4px;
        & span {
            color: ${props => props.color};
            font-weight: 700;
        };
        & svg {
            width: 24px;
            height: 24px;
        }`