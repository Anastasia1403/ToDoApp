import styled, { css } from 'styled-components'

const commonStyles = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    min-height: 100%;
    height: 150px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    overflow-y: auto;
    box-shadow: 0px 0px 22px 10px rgba(0,0,0,0.3);`

export const StyledSection = styled.section`
    ${commonStyles};
`

export const RowStyledSection = styled.section`
    ${commonStyles};
    grid-column: 1 / 3;
`