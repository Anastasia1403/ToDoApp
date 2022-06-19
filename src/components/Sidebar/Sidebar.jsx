import React, { useState } from 'react';
import {StyledSidebar, TagsList } from './styled';
import TagItem from '../../shared/TagItem/TagItem';
import { useSelector } from 'react-redux';
import CustomModal from '../../shared/CustomModal/CustomModal';
import ChangeTagsForm from '../ChangeTagsForm/ChangeTagsForm';
import Button from '../../shared/Button/Button';
import plus from '../../assets/svg/plus-icon.svg'
import { tagsSelector } from '../../store/tags/selectors';

const Sidebar = () => {
    const tagsList = useSelector(tagsSelector);

    const [tagsModalIsOpen, setIsOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true)
    }
    const closeModal = (e) => {
        e.preventDefault();
        setIsOpen(false)
    }
    return (
        <StyledSidebar>
            <div>
                <h3>Tags</h3>
                <TagsList>
                {
                    Object.entries(tagsList).map(([id, tag]) => <TagItem key={id} color={tag.color} title={tag.title}/>)
                }
                </TagsList>
                <Button icon={plus} type='submit' onClick={openModal}>add new tag</Button>
            </div>
            <CustomModal closeModal={closeModal} modalIsOpen={tagsModalIsOpen}>
                <ChangeTagsForm/>
            </CustomModal>
        </StyledSidebar>
    );
}

export default Sidebar;
