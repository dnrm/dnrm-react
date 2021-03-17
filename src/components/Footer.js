import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export default function Footer() {
    return (
        <Container>
            <h1>Made by Daniel Medina</h1>
        </Container>
    )
}
