import React, { useContext } from 'react';
import {StyledSidebar, TagsList, ToggleButton } from './styled';
import TagItem from '../../shared/TagItem/TagItem';
import { useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import plus from '../../assets/svg/plus-icon.svg'
import { tagsSelector } from '../../store/tags/selectors';
import { TagsModalContext } from '../ToDoApp';
import Title from '../../shared/Title/Title';

const Sidebar = ({isSidebarOpen, closeSidebar}) => {
    const tagsList = useSelector(tagsSelector);

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true)
    }
    
    const {setIsOpen} = useContext(TagsModalContext)
    return (
            <StyledSidebar isSidebarOpen={isSidebarOpen}>
                <ToggleButton 
                    isSidebarOpen={isSidebarOpen} 
                    onClick={closeSidebar}>
                </ToggleButton>
                <Title>Tags</Title>
                <TagsList>
                {
                    Object.entries(tagsList).map(([id, tag]) => <TagItem key={id} tag={tag}/>)
                }
                </TagsList>
                <Button icon={plus} type='submit' onClick={openModal}>add new tag</Button>
                            </StyledSidebar>
        
    );
}

export default Sidebar;
