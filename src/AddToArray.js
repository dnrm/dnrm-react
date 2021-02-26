import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 5px;
    margin: 5px;
`;

export default function AddToArray() {

    const [text, setText] = useState('');
    const [messages, setMessage] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value, console.log(text));
    }

    const handleClick = (e) => {
        setMessage([text, ...messages], console.log(messages));
        setText('');
    }

    return (
        <>
            <h1>Add element to array</h1>
            <input type="text" onChange={handleChange} value={text} />
            <Button onClick={handleClick}>Add</Button>
            <ul>
                {messages.map(i => <li>{i}</li>)}
            </ul>
        </>
    )
}