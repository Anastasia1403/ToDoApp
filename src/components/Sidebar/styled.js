import styled, { css } from 'styled-components'
import arrowIconUrl from '../../assets/svg/arrow-icon.svg';


export const StyledSidebar = styled.aside`
    transform: ${(props) => (props.isSidebarOpen ? 'translateX(0)' : 'translateX(-185px)')};
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
        height: 100%;
        transform: ${(props) => (props.isSidebarOpen ? 'translateX(0)' : 'translateX(-95%)')};
        
    }` 

export const ToggleButton = styled.button`
    position: absolute;
    top: 24px;
    right: -12px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: 0.5s;
    cursor: pointer;
    border: 2px solid #5a4385;
    background: #ffffff center / contain no-repeat url(${arrowIconUrl});
    transform: ${(props) => (props.isSidebarOpen ? 'rotate(-180deg)' : 'rotate(0)')};
    &:hover {
        transform: ${(props) => (props.isSidebarOpen ? 'rotate(-180deg) scale(1.3)' : 'rotate(0) scale(1.3) translateX(5px)')}; ;
    }
    
`

export const TagsList = styled.ul`
    margin: 12px 12px 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;`

const tagButton = css`
    position: absolute;
    display: none;
    width: 20px;
    height: 20px;
    right: -7px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: .5s;
    background-color: #39254b;
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
        fill: #ffffff;
    }
`;

export const DeleteTagButton = styled.button`
    ${tagButton}
    top: -7px;    
    `

export const EditTagButton = styled.button`
    ${tagButton}       
    bottom: -7px;
`
export const TagItemWtapper = styled.div`
    position: relative;
    &:hover ${DeleteTagButton},
    &:hover ${EditTagButton} {
        display: block;
    }`
