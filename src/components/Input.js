import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    font-size: 1.2em;
    padding: 10px;
    -webkit-box-shadow: 0px 5px 15px 0px rgba(148,148,148,1);
    -moz-box-shadow: 0px 5px 15px 0px rgba(148,148,148,1);
    box-shadow: 0px 5px 15px 0px rgba(148,148,148,1);
    border: 1px solid lightgray;
`;


export default function Input(props) {
    return (
        <StyledInput onChange={props.onChange}>{props.children}</StyledInput>
    )
}