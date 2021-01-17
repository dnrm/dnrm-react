import React, { useState } from 'react';
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 8em;
    font-weight: 900;
    text-align: center;
    padding: 0;
`;

const Paragraph = styled.p`
    font-size: 1.2em;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 5px;
    margin: 5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    padding: 10px;
`;

function Dnrm() {
    const [count, setCount] = useState(0);
    const plusOne = () => {
        setCount(count + 1);
    }
    const minusOne = () => {
        setCount(count - 1);
    }

    return (
        <>
            <Title className="gradient-text">ReactJS</Title>
            <Paragraph>{count} {count === 69 ? 'nice' : ''}</Paragraph>
            <ButtonContainer>
                <Button onClick={minusOne} tabIndex="1">-1</Button>
                <Button onClick={plusOne} tabIndex="2">+1</Button>
            </ButtonContainer>
        </>
    )
}

export default Dnrm;