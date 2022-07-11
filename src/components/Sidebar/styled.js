import styled from 'styled-components'
import arrowIconUrl from '../../assets/svg/arrow-icon.svg';
import deleteIconUrl from '../../assets/svg/delete-icon.svg';
import editIconUrl from '../../assets/svg/edit-icon.svg';

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

export const DeleteTagButton = styled.button`
    position: absolute;
    display: none;
    width: 20px;
    height: 20px;
    top: -7px;
    right: -7px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: .5s;
    background: #39254b center / 70% no-repeat url(${deleteIconUrl});
    &:hover {
        transform: scale(1.5);
    }
    `

    export const EditTagButton = styled.button`
    position: absolute;
    display: none;
    width: 20px;
    height: 20px;
    bottom: -7px;
    right: -7px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: .5s;
    background: #39254b center / 70% no-repeat url(${editIconUrl});
    &:hover {
        transform: scale(1.5);
    }
    `
export const TagItemWtapper = styled.div`
    position: relative;
    &:hover ${DeleteTagButton},
    &:hover ${EditTagButton} {
        display: block;
    }`
