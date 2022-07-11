import styled from 'styled-components'
    

export const ToggleContainer = styled.div`
    position: relative;
    width: 120px;
    text-align: left;
`

export const Checkbox = styled.input`
    display: none;
`

export const Inner = styled.span`
    display: flex;
    width: 200%;
    margin-left: -100%;
    transition: 0.5s;
    &:before,
    &:after {
        font-size: 12px;
        width: 50%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        font-weight: 700;
        
    }
    &:before {        
        content: "DONE";
        background-color: #6f44ae;
        padding-right: 30px;
    }
    &:after {
        content: "IN PROGRESS";
        padding-left: 20px;
        background-color: #a3a2b5;
    }
`

export const Switch = styled.span`
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 90px;
    width: 20px;
    height: 20px;
    margin: 5px;
    background: #ffffff;
    border-radius: 50%;
    transition: 0.5s;
`

export const CheckboxLabel = styled.label`
    display: block;
    overflow: hidden;
    border-radius: 15px;
    cursor: pointer;

    ${Checkbox}:checked + & ${Inner} {
        margin-left: 0;
    }
    ${Checkbox}:checked + & ${Switch} {
        right: 0px;
    }
`

