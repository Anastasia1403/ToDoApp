import React, { useEffect, useState } from 'react';
import TagForm from './components/TagForm/TagForm';
import Router from './routes/Router';
import CustomModal from './shared/CustomModal/CustomModal';
import { useDispatch } from 'react-redux'
import { fetchColors } from './store/colors/thunk'

export const TagsModalContext = React.createContext({
    tagsModalIsOpen: false,
    setIsOpen: () => {}
})

const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchColors())
    }, [dispatch])

    const [tagsModalIsOpen, setIsOpen] = useState(false);

    const closeModal = (e) => {
        setIsOpen(false)
    }
    return (
        <>
            <TagsModalContext.Provider value={{setIsOpen}}>
                <Router/>
            <CustomModal closeModal={closeModal} modalIsOpen={tagsModalIsOpen} title='Create New Tag'>
                <TagForm closeModal={closeModal}/>
            </CustomModal>
            </TagsModalContext.Provider>
        </>
    )
};

export default App;