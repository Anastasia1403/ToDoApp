import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const StyledSidebar = styled.aside`
display: flex;
flex-direction: column;
gap: 40px;
padding: 30px 12px;

`
export const StyledLink = styled(Link)`
position: relative;
text-decoration: none;
transition: 0.5s;

&:last-child {
    margin: auto 0 0 0;
}
&:after {
    position: absolute;
    content: '';
    top: -50%;
    left: ${props => props.isActive ? '-12px' : '-192px'};
    height: 200%;
    width: 180px;
    background-color: #ffe66c;
    border-radius: 0 30px 30px 0;
    transition: 0.5s;
    z-index: -1;
}
&:hover:after {
    left: ${props => props.isActive ? '-12px' : '-160px'};
}
`