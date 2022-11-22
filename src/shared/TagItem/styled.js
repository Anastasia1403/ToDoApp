import styled from 'styled-components'

export const StyledTagItem = styled.li`
    background-color: ${(props) => props.checked ?  props.color : "#ffffff"};
    border: 2px solid ${(props) => props.checked ? "transparent" : props.color};    
    border-radius: ${props => props.size === 'small' ? '4px' : '12px'};
    max-width: ${props => props.size === 'small' ? '80px' : 'auto' };
    font-size: ${props => props.size === 'small' ? '10px' : '16px' };
    color: #ffffff;
    list-style-type: none;
    `
export const TagCheckbox = styled.input`
    display: none;`

export const TagCheckboxLabel = styled.label`
    display: block;
    color: ${(props) => props.checked ? '#ffffff': props.color};
    padding: ${props => props.size === 'small' ? '0 4px' : '4px 12px'};
    cursor: pointer;
    `
    