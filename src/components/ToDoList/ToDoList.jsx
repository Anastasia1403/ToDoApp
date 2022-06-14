import React, {useState} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import { StyledSection } from "../../shared/StyledSection";
import { useSelector } from 'react-redux';
import Button from '../../shared/Button/Button';
import CustomModal from '../../shared/CustomModal/CustomModal';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import { EmptyBlock, StyledList } from './styled';

const ToDoList = ({ onChangeCurrentToDo, currentToDoId}) => {
    const todos = useSelector(state => state.todos)
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal (e) {
        e.preventDefault()
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <StyledSection>
            { Object.keys(todos).length ?
                <StyledList>
                    {(Object.entries(todos)).map(([id, todo]) => {
                        return <ToDoItem
                            currentToDoId={currentToDoId}
                            onChangeCurrentToDo={onChangeCurrentToDo}
                            isCompleted={todo.isCompleted}
                            id={id}
                            tags={todo.tags}
                            key={todo.id}
                            todo={todo.title}
                            />
                    })}
                </StyledList>
            : <EmptyBlock>What do you want to do?</EmptyBlock> }
            <Button onClick={openModal} title='Create New Task'/>
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
