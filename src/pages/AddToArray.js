import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Input from '../components/Input';
import Button from '../components/Button.js';

const Item = styled.li`
    padding: 10px;
    background-color: gray;
    margin: 5px;
    list-style: none;
    border-radius: 15px;
    color: white;
    display: inline-block;
`;

export default function AddToArray() {

    const [text, setText] = useState('');
    const [messages, setMessage] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value, console.log(text));
    }

    const handleClick = (e) => {
        
        setMessage([...messages, text], console.log(messages));
        setText('');
    }

    return (
        <>
            <Helmet>
                <title>Add To Array | Daniel Medina</title>
            </Helmet>
            <h1>Add element to array</h1>
            <form onSubmit={e => { e.preventDefault(); handleClick(e);}}>
                <Input name="text" type="text" onChange={handleChange} value={text} />
                <Button type="submit">Add</Button>
            </form>
            <ul>
                {messages.map((i, index) => <Item>{i}</Item>)}
            </ul>
        </>
    )
}