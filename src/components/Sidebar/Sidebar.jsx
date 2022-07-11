import React, { useContext } from 'react';
import {StyledSidebar, TagsList, ToggleButton, TagItemWtapper, DeleteTagButton, EditTagButton } from './styled';
import TagItem from '../../shared/TagItem/TagItem';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import plus from '../../assets/svg/plus-icon.svg'
import { tagsSelector } from '../../store/tags/selectors';
import { TagsModalContext } from '../ToDoApp';
import Title from '../../shared/Title/Title';
import { deleteTagAction } from '../../store/tags/actions';
import { toggleColorsAction } from '../../store/colors/actions';
import { todosSelector } from '../../store/todos/selectors';
import { editTodoAction } from '../../store/todos/actions';
import CustomModal from '../../shared/CustomModal/CustomModal';
import { useState } from 'react';
import TagForm from '../TagForm/TagForm';

const Sidebar = ({isSidebarOpen, closeSidebar, editTag}) => {
    const tagsList = useSelector(tagsSelector);
    const dispatch = useDispatch();
	const todos = useSelector(todosSelector)
    
	const [editTagModalIsOpen, setEditTagModalIsOpen] = useState(false);
	const [editedTagId, setEditedTagId] = useState('');

	const openEditTagModal = (e, id) => {
        e.preventDefault();
		setEditedTagId(id)
        setEditTagModalIsOpen(true)
    }

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true)
    }
    const deleteTag = (tagId) => {
		Object.keys(todos).length && Object.entries(todos).forEach(([todoId, todo]) => {
			if (todo.tags.includes(tagId)) {
				todo.tags.splice(todo.tags.indexOf(tagId), 1)
				dispatch(editTodoAction({id: todoId, tags: todo.tags}))
			} 
        })
        dispatch(deleteTagAction(tagId))
        dispatch(toggleColorsAction(tagId)) 
    }
	const closeEditTagModal = (e) => {
        e.preventDefault();
		setEditTagModalIsOpen(false)
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
                    Object.entries(tagsList).map(([id, tag]) => 
                        <TagItemWtapper>
                            <TagItem key={id} tag={tag}/>
                            <DeleteTagButton onClick={() => deleteTag(id, tag.color)}/>
                            <EditTagButton onClick={(e) => openEditTagModal(e, id)}/>
                        </TagItemWtapper>)
                }
                </TagsList>
                <Button icon={plus} type='submit' onClick={openModal}>add new tag</Button>
				<CustomModal closeModal={closeEditTagModal} modalIsOpen={editTagModalIsOpen} title='Edit Tag'>
					<TagForm closeModal={closeEditTagModal} editedTagId={editedTagId} />
				</CustomModal>
            </StyledSidebar>
			
        
    );
}

export default Sidebar;
