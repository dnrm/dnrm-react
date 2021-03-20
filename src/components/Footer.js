import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    color: white;
    background-color: #cb997e;
    padding: 25px;
    bottom: 0;
    position: absolute;
    width: 100%;
`;

export default function Footer() {
    return (
        <Container>
            <h1>Made by Daniel Medina</h1>
            <a href="https://github.com/dnrm" style={{ color: 'white', textDecoration: 'none' }}>My GitHub</a>
        </Container>
    )
}
