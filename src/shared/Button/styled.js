import styled from 'styled-components'

export const StyledButton = styled.button`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 8px;
    background-color: #612683;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    padding: 8px 12px;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        background-color: #491765;
    }
    &:disabled {
        background-color: #4b454e;
        color: #b4abb8;
    }
    & img {
        width: 24px;
        height: auto;
    }` 
