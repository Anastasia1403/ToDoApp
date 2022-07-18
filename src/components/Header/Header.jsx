import React from 'react'
import styled from 'styled-components'

export const StyledHeader = styled.header`
    grid-column: 1 / 3;
    background-color: #1d2e5a;
`


function Header() {
    return (
        <StyledHeader>Header</StyledHeader>
    )
}

export default Header