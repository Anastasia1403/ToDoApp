import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import TaskDetails from './TaskDetails/TaskDetails';
import ToDoList from "./ToDoList/ToDoList";
import styled from 'styled-components';
import CustomModal from '../shared/CustomModal/CustomModal';
import TagForm from './TagForm/TagForm';


export const MainBlock = styled.main`
    display: flex;
    gap: 40px;
    align-items: stretch;
    padding: 120px 40px;
    justify-content: space-around;
    flex-grow: 1;
    
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        padding: 40px;
  }`

export const TagsModalContext = React.createContext({
    tagsModalIsOpen: false,
    setIsOpen: () => {}
})

const ToDoApp = () => {
    const [currentToDoId, setCurrentToDoId] = useState('');

    const [tagsModalIsOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
    function onChangeCurrentToDo(id) {
        setCurrentToDoId(id)
    }
    const closeModal = (e) => {
        e.preventDefault();
        setIsOpen(false)
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <>
            <TagsModalContext.Provider value={{setIsOpen}}>
                <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar}/>
                <MainBlock>
                    <ToDoList 
                        onChangeCurrentToDo={onChangeCurrentToDo}
                        currentToDoId={currentToDoId}
                    />
                    <TaskDetails currentToDoId={currentToDoId} onChangeCurrentToDo={onChangeCurrentToDo}/>
                </MainBlock>
            </TagsModalContext.Provider>
            <CustomModal closeModal={closeModal} modalIsOpen={tagsModalIsOpen} title='Create New Tag'>
                <TagForm closeModal={closeModal}/>
            </CustomModal>
        </>
    )
};

export default ToDoApp;
