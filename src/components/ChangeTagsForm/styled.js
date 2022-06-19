import styled from 'styled-components'


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    `

export const SelectOption = styled.option`
    padding: 8px;
    background-color: ${props => props.color};`

export const Select = styled.select`
    width: 200px;`