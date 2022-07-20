import styled from 'styled-components'

export const StyledButton = styled.button`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 8px;
    background-color: #1d2e5a;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    padding: 8px 12px;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: #ce5871;
    }
    &:disabled {
        background-color: #475987;
        color: #b4abb8;
    }
    & img {
        width: 24px;
        height: auto;
    }` 
