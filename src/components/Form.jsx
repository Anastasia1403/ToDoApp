import React, {useState} from 'react';

const Form = function ({ handleAddToDo }) {


    const [text, setText] = useState('');
    function handleOnClick(e) {
        e.preventDefault()
        handleAddToDo(text);
        setText('')
    }
    return (
        <form>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit" onClick={e => handleOnClick(e)} disabled={!text}>Add To Do</button>
        </form>
    )
}


export default Form;
