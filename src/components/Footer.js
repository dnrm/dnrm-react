import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 25px;
    position: fixed;
    bottom: 0;
    left: 0;
    color: white;
    background-color: #cb997e;
`;

export default function Footer() {
    return (
        <Container>
            <h1>Made by Daniel Medina</h1>
            <a href="https://github.com/dnrm" style={{ color: 'white', textDecoration: 'none' }}>My GitHub</a>
        </Container>
    )
}
