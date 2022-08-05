import styled from 'styled-components'
import backgroundUrl from './assets/background.png'

export const MainBlock = styled.main`
    height: 100%;
    width: 100%;
    padding: 60px;
    background: url(${backgroundUrl}) no-repeat;
    background-size: cover;
    overflow-y: auto;
    `

export const StyledLayout = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 60px 1fr;
    height: 100vh;`
