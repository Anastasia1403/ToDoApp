import React, {useState} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import { StyledSection } from "../../shared/StyledSection";
import Button from '../../shared/Button/Button';
import CustomModal from '../../shared/CustomModal/CustomModal';
import TaskForm from '../TaskForm/TaskForm';
import { EmptyBlock, StyledList, TotalTasks } from './styled';
import Title from '../../shared/Title/Title';

const ToDoList = ({taskList, isEditable, emptyText, title}) => {
    console.log(taskList)

    const [modalIsOpen, setIsOpen] = useState(false)
    const shouldShowList = Boolean(Object.keys(taskList).length)

    function openModal (e) {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <StyledSection>
            <Title>{title}</Title>
            { shouldShowList ?
            <>
                <TotalTasks>Total: {Object.keys(taskList).length} tasks</TotalTasks>
                <StyledList>
                    {(Object.entries(taskList)).map(([id, todo]) => {
                        return <ToDoItem
                            isEditable={isEditable}
                            id={Number(id)}
                            key={id}
                            todo={todo}
                            />
                    })}
                </StyledList>
            </>            
            : <EmptyBlock>{emptyText}</EmptyBlock> }
            {
            isEditable && 
                <>
                    <Button onClick={openModal}>Create New Task</Button>
                    <CustomModal
                        closeModal={closeModal}
                        modalIsOpen={modalIsOpen}
                        title='Create New Task'
                    >
                        <TaskForm closeModal={closeModal}/>
                    </CustomModal>
                </>
            }
        </StyledSection>
    )
};

export default ToDoList;
