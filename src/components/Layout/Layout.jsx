import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { MainBlock, StyledLayout } from './styled'

function Layout({children}) {
    return (
        <StyledLayout>
            <Header/>
            <Sidebar/>
            <MainBlock>
                {children}
            </MainBlock>     
        </StyledLayout>
    )
}

export default Layout