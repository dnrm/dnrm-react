import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import Input from './components/Input';

const StyledDiv = styled.form`
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
        window.location = `/state-test?message=${message}`;
    }

    return (
        <div>
            <p>Your mesage: {message ? message : 'Nothing'}</p>
            <StyledDiv onSubmit={e => {e.preventDefault(); submit(e);}}>
                <Input type="text" onChange={handleChange} />
                <Button type="submit">Submit</Button>
            </StyledDiv>
        </div>
    )
}