import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';

const commonStylesIconButton = css`
width: 20px;
height: 20px;
border-radius: 50%;
border: none;
cursor: pointer;
transition: .5s;
object-fit: contain;
&:hover {
    transform: scale(1.5);
}
& svg {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 60%;
}`;

export const tagButton = css`
    ${commonStylesIconButton}
    position: absolute;
    display: none;
    right: -7px;
    background-color: #39254b;
    & svg {    
        fill: #ffffff;
}`

export const IconButton = css`
    ${commonStylesIconButton}
    background-color: transparent;
    position: relative;
    & svg {
        width: 100%;
        height: auto;
        fill: #28185f;
}`

export const TaskButton = styled.button`
    ${IconButton}
`
export const LinkTaskButton = styled(Link)`
    ${IconButton}
`