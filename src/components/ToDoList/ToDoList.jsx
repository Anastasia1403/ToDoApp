import React, {useState} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import { StyledSection } from "../../shared/StyledSection";
import { useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import CustomModal from '../../shared/CustomModal/CustomModal';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import { EmptyBlock, StyledList } from './styled';
import { todosSelector } from '../../store/todos/selectors';

const ToDoList = ({ onChangeCurrentToDo, currentToDoId}) => {
    const todos = useSelector(todosSelector)
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal (e) {
        e.preventDefault()
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const shouldShowList = Boolean(Object.keys(todos).length)
    return (
        <StyledSection>
            { shouldShowList ?
                <StyledList>
                    {(Object.entries(todos)).map(([id, todo]) => {
                        return <ToDoItem
                            isActive={currentToDoId === id}
                            currentToDoId={currentToDoId}
                            onChangeCurrentToDo={onChangeCurrentToDo}
                            id={id}
                            key={id}
                            todo={todo}
                            />
                    })}
                </StyledList>
            : <EmptyBlock>What do you want to do?</EmptyBlock> }
            <Button onClick={openModal}>Create New Task</Button>
            <CustomModal
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
            >
                <NewTaskForm closeModal={closeModal}/>
            </CustomModal>
        </StyledSection>
    )
};

export default ToDoList;
