import styled from 'styled-components'

export const StyledSidebar = styled.aside`
    margin-left: ${(props) => (props.isSidebarOpen ? '0' : '-200px')};
    position: relative;
    width: 200px;
    background-color: #ffffff;
    padding: 24px 12px;
    box-shadow: 0px 0px 22px 10px rgb(0 0 0 / 30%);
    transition: 0.5s;
    @media (max-width: 500px) {
        position: absolute;
        width: 100%;
        height: 100%;
        margin-left: ${(props) => (props.isSidebarOpen ? '0' : '-100%')};
        
    }` 

export const ToggleButton = styled.button`
    position: absolute;
    top: 24px;
    right: ${(props) => (props.isSidebarOpen ? '24px' : '-40px')};
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    transition: 0.5s;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 0% 50%;
        transform: rotate(45deg);
        height: 2px;
        width: ${(props) => (props.isSidebarOpen ? '32px' :'17px')};
        border-radius: 1px;
        background-color: #674f91;
        transition: 0.5s;
    }
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        transform-origin: 0% 50%;
        transform: rotate(-45deg);
        height: 2px;
        width: ${(props) => (props.isSidebarOpen ? '32px' :'17px')};
        border-radius: 1px;
        background-color: #674f91;
        transition: 0.5s;
    }
    
`

export const TagsList = styled.ul`
    margin: 12px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;`
