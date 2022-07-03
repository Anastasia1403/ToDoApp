import styled from 'styled-components'
import arrowIconUrl from '../../assets/svg/arrow-icon.svg';

export const StyledSidebar = styled.aside`
    transform: ${(props) => (props.isSidebarOpen ? 'translateX(0)' : 'translateX(-185px)')};
    /* margin-left: ${(props) => (props.isSidebarOpen ? '0' : '-185px')}; */
    position: ${(props) => (props.isSidebarOpen ? 'relative' : 'absolute')};
    height:  ${(props) => (props.isSidebarOpen ? 'auto' : '100%')};
    width: 200px;
    background-color: #ffffff;
    padding: 24px 12px;
    box-shadow: 0px 0px 22px 10px rgb(0 0 0 / 30%);
    transition: 0.5s;
    @media (max-width: 500px) {
        position: absolute;
        width: 100%;
        margin-left: ${(props) => (props.isSidebarOpen ? '0' : '-100%')};
        
    }` 

export const ToggleButton = styled.button`
    position: absolute;
    top: 24px;
    right: -12px;
    /* right: ${(props) => (props.isSidebarOpen ? '24px' : '-40px')}; */
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: 0.5s;
    cursor: pointer;
    border: 2px solid #5a4385;
    background: #ffffff center / contain no-repeat url(${arrowIconUrl});
    transform: ${(props) => (props.isSidebarOpen ? 'rotate(-180deg)' : 'rotate(0)')};
    /* &:before {
        content: '';
        position: absolute;
        top: ${(props) => (props.isSidebarOpen ? '12px' : '4.5px')};;
        left: 8.5px;
        transform-origin: 0% 50%;
        transform: ${(props) => (props.isSidebarOpen ? 'rotate(-45deg)' : 'rotate(45deg)')};
        height: 2px;
        width: 10px;
        width: ${(props) => (props.isSidebarOpen ? '16px' :'8px')};
        border-radius: 1px;
        background-color: #674f91;
        transition: 0.5s;
    }
    &:after {
        content: '';
        position: absolute;
        bottom: ${(props) => (props.isSidebarOpen ? '12px' : '4.5px')};
        left: 8.5px;
        transform-origin: 0% 50%;
        transform: ${(props) => (props.isSidebarOpen ? 'rotate(45deg)' : 'rotate(-45deg)')};
        height: 2px;
        width: 10px;
        width: ${(props) => (props.isSidebarOpen ? '16px' :'8px')};
        border-radius: 1px;
        background-color: #674f91;
        transition: 0.5s;
    } */
    &:hover {
        transform: ${(props) => (props.isSidebarOpen ? 'rotate(-180deg) scale(1.3)' : 'rotate(0) scale(1.3) translateX(5px)')}; ;
    }
    
`

export const TagsList = styled.ul`
    margin: 12px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;`
