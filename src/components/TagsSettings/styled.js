import styled from 'styled-components'
import arrowIconUrl from '../../assets/svg/arrow-icon.svg';
import { tagButton } from '../../shared/IconButton';

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
    margin: 12px 0 36px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;`

export const DeleteTagButton = styled.button`
    ${tagButton}
    top: -7px;    
    `

export const EditTagButton = styled.button`
    ${tagButton}       
    bottom: -7px;
`
export const TagItemWrapper = styled.div`
    position: relative;
    &:hover ${DeleteTagButton},
    &:hover ${EditTagButton} {
        display: block;
    }`
