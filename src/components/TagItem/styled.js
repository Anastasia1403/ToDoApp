import styled from 'styled-components'

export const StyledTagItem = styled.li`
    background-color: ${(props) => props.checked ?  props.color : "#ffffff"};
    border: 2px solid ${(props) => props.checked ? "transparent" : props.color};
    padding: ${props => props.size === 'small' ? '0 4px' : '4px 12px'};
    border-radius: ${props => props.size === 'small' ? '4px' : '12px'};
    max-width: ${props => props.size === 'small' ? '80px' : '150px' };
    font-size: ${props => props.size === 'small' ? '10px' : '16px' };
    color: #ffffff;
    list-style-type: none;
    `