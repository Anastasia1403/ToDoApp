import styled from 'styled-components'

export const StyledSidebar = styled.aside`
    background-color: #ffffff;
    padding: 12px;` 

export const TagsList = styled.ul`
    margin: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;`

export const TagItem = styled.li`
    background-color: ${(props) => (props.color)};
    padding: 4px 12px;
    border-radius: 12px;
    max-width: 150px;`