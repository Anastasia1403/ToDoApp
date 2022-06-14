import styled from 'styled-components'


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;`

export const TagItem = styled.li`
    background-color: ${(props) => (props.color)};
    padding: 4px 12px;
    border-radius: 12px;`

export const TagsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;`

export const TagCheckbox = styled.input`
    display: none;`

export const TagCheckboxLabel = styled.label`
    color: ${(props) => props.checked ? '#ffffff': props.color}`
    