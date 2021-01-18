import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import Input from './components/Input';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function StateTest() {
    const [message, setMessage] = useState("")

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const submit = (event) => {
        window.location = `/?message=${message}`;
    }

    return (
        <div>
            <p>Your mesage: {message ? message : 'Nothing'}</p>
            <StyledDiv>
                <Input type="text" onChange={handleChange} />
                <Button type="submit" onClick={submit}>Submit</Button>
            </StyledDiv>
        </div>
    )
}