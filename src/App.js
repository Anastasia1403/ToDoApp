import React, { useState } from 'react';
import TagForm from './components/TagForm/TagForm';
import Router from './routes/Router';
import CustomModal from './shared/CustomModal/CustomModal';

export const TagsModalContext = React.createContext({
    tagsModalIsOpen: false,
    setIsOpen: () => {}
})

const App = () => {
    const [tagsModalIsOpen, setIsOpen] = useState(false);

    const closeModal = (e) => {
        setIsOpen(false)
    }
    return (
        <>
            <TagsModalContext.Provider value={{setIsOpen}}>
                <Router/>
            </TagsModalContext.Provider>
            <CustomModal closeModal={closeModal} modalIsOpen={tagsModalIsOpen} title='Create New Tag'>
                <TagForm closeModal={closeModal}/>
            </CustomModal>
        </>
    )
};

export default App;