import styled from 'styled-components'

export const CloseButton = styled.button`
    position: absolute;
    right: 24px;
    top: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    `

export const NewTaskForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    `
export const StyledInput = styled.input`
    width: 70%;
    min-width: 200px;
    `
export const StyledTextarea = styled.textarea`
    width: 70%;
    min-width: 200px;
    resize: none;
    `

export const TagItem = styled.li`
    background-color: ${(props) => (props.color)};
    padding: 4px 12px;
    border-radius: 12px;`

export const TagsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;`

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        height: '50%',
        maxWidth: '500px',
        minWidth: '300px',
        width: '70%',
        transform: 'translate(-50%, -50%)',
    
    },
};