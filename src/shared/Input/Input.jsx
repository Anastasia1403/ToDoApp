import styled from 'styled-components'

const Input = styled.input`
    border-radius: 5px;
    width: 100%;
    padding: 4px 8px;    
    border: 2px solid #67547b;
    outline: none;
    &:active,
    &:hover,
    &:focus {
        background: #e9ebe8;
        outline: none;
    };
    &:placeholder {
        color: #4b3166
    }`

export default Input