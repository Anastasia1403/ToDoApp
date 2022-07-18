import React, { useContext } from 'react';
import { TagsList, TagItemWrapper, DeleteTagButton, EditTagButton } from './styled';
import TagItem from '../../shared/TagItem/TagItem';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import plus from '../../assets/svg/plus-icon.svg'
import { tagsSelector } from '../../store/tags/selectors';
import { TagsModalContext } from '../../App';
import Title from '../../shared/Title/Title';
import { deleteTagAction } from '../../store/tags/actions';
import { toggleColorsAction } from '../../store/colors/actions';
import { todosSelector } from '../../store/todos/selectors';
import { editTodoAction } from '../../store/todos/actions';
import CustomModal from '../../shared/CustomModal/CustomModal';
import { useState } from 'react';
import TagForm from '../TagForm/TagForm';
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/svg/edit-icon.svg';
import { StyledSection } from '../../shared/StyledSection';

const TagsSettings = () => {
    const tagsList = useSelector(tagsSelector);
    const dispatch = useDispatch();
	const todos = useSelector(todosSelector)
    
	const [editedTagId, setEditedTagId] = useState(null);

	const openEditTagModal = (id) => {
		setEditedTagId(id)
    }
	const closeEditTagModal = () => {
		setEditedTagId(null)
    }

    const openModal = (e) => {
        setIsOpen(true)
    }
    const deleteTag = (tagId, color) => {
		Object.keys(todos).length && Object.entries(todos).forEach(([todoId, todo]) => {
			if (todo.tags.includes(tagId)) {
				todo.tags.splice(todo.tags.indexOf(tagId), 1)
				dispatch(editTodoAction({id: todoId, tags: todo.tags}))
			} 
        })
        dispatch(deleteTagAction(tagId))
        dispatch(toggleColorsAction(color)) 
    }
    
    const {setIsOpen} = useContext(TagsModalContext)
    return (
        <StyledSection>
            <Title>Workspace Tags</Title>
            <TagsList>
            {
                Object.entries(tagsList).map(([id, tag]) => 
                    <TagItemWrapper>
                        <TagItem key={id} tag={tag}/>
                        <DeleteTagButton onClick={() => deleteTag(id, tag.color)}><DeleteIcon /></DeleteTagButton>
                        <EditTagButton onClick={() => openEditTagModal(id)}><EditIcon/></EditTagButton>
                    </TagItemWrapper>)
            }
            </TagsList>
            <Button icon={plus} type='submit' onClick={openModal}>add new tag</Button>
            <CustomModal closeModal={closeEditTagModal} modalIsOpen={Boolean(editedTagId)} title='Edit Tag'>
                <TagForm closeModal={closeEditTagModal} editedTagId={editedTagId} />
            </CustomModal>
        </StyledSection>
    );
}

export default TagsSettings;
