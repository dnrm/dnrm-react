import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 15px 20px;
    border: none;
    -webkit-box-shadow: 0px 5px 15px 0px rgba(148,148,148,1);
    -moz-box-shadow: 0px 5px 15px 0px rgba(148,148,148,1);
    box-shadow: 0px 5px 15px 0px rgba(148,148,148,1);
    border-radius: 5px;
    margin: 10px;
    background-color: ${props => props.danger ? '#d92a27' : 'white'};
    color: white;
`;


export default function Button(props) {
    return (
        <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    )
}