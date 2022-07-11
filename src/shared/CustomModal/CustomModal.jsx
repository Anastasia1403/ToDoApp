import React from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import Title from '../Title/Title';

export const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      height: '70%',
      maxWidth: '500px',
      minWidth: '300px',
      width: '70%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      border: '2px solid #c8bbe9',
      fontFamily: 'Avenir, Helvetica, Arial, sans-serif'
  
  },
};
export const CloseButton = styled.button`
    position: absolute;
    right: 24px;
    top: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    `

Modal.setAppElement('#root');

function CustomModal({ closeModal, modalIsOpen, children, title }) {
  
  return (
    <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick
            style={customStyles}
        >
          <Title>{title}</Title>
      <CloseButton onClick={closeModal}>✖</CloseButton>
      {children}
    </Modal>
  )
}

export default CustomModal