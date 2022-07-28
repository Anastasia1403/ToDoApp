import React from 'react';
import { TagsList, TagItemWrapper, DeleteTagButton, EditTagButton } from './styled';
import TagItem from '../../shared/TagItem/TagItem';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import plus from '../../assets/svg/plus-icon.svg'
import { tagsSelector } from '../../store/tags/selectors';
import Title from '../../shared/Title/Title';
import { todosSelector } from '../../store/todos/selectors'
import CustomModal from '../../shared/CustomModal/CustomModal';
import { useState } from 'react';
import TagForm from '../TagForm/TagForm';
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/svg/edit-icon.svg';
import { StyledSection } from '../../shared/StyledSection';
import { editTask } from '../../store/todos/thunk';
import { deleteTag } from '../../store/tags/thunk';

const TagsSettings = () => {
    const tagsList = useSelector(tagsSelector);
    const dispatch = useDispatch();
	const todos = useSelector(todosSelector)
    
	const [editedTagId, setEditedTagId] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

	const openTagModal = (id=null) => {
        setModalOpen(true)
		setEditedTagId(id)
    }
	const closeTagModal = () => {
        setModalOpen(false)
		setEditedTagId(null)
    }
    const removeTag = (tagId) => {
		Object.keys(todos).length && Object.entries(todos).forEach(([todoId, todo]) => {
			if (todo.tags.includes(tagId)) {
				todo.tags.splice(todo.tags.indexOf(tagId), 1)
				dispatch(editTask({id: Number(todoId), tags: todo.tags}))
			} 
        })
        dispatch(deleteTag(tagId))
    }
    return (
        <StyledSection>
            <Title>Workspace Tags</Title>
            <TagsList>
            {
                Object.entries(tagsList).map(([id, tag]) => {
                    return <TagItemWrapper>
                        <TagItem key={id} tag={tag}/>
                        <DeleteTagButton onClick={() => removeTag(Number(id))}><DeleteIcon /></DeleteTagButton>
                        <EditTagButton onClick={() => openTagModal(Number(id))}><EditIcon/></EditTagButton>
                    </TagItemWrapper>
                }
                )
            }
            </TagsList>
            <Button icon={plus} type='submit' onClick={() => openTagModal()}>add new tag</Button>
            <CustomModal closeModal={closeTagModal} modalIsOpen={isModalOpen} title={ editedTagId ? 'Edit Tag' : 'Create New Tag'}>
                <TagForm closeModal={closeTagModal} editedTagId={editedTagId}/>
            </CustomModal>
        </StyledSection>
    );
}

export default TagsSettings;
