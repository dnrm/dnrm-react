import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import './styles/hr.css';

const Title = styled.h1`
    font-size: 3em;
    padding-bottom: 25px;
`;

const Subtitle = styled.h3`
    font-size: 2em;
    padding: 5px 0;
`;

const Album = styled.li`
    list-style: none;
    padding: 5px 0;
`;

export default function Coldplay() {
    return (
        <>
            <Helmet>
                <title>Coldplay | Daniel Medina</title>
            </Helmet>
            <Title>Coldplay</Title>
            <hr />
            <Subtitle>Albums</Subtitle>
            <ul id="albums-list">
                <Album>Parachutes</Album>
                <Album>A Rush of Blood to the Head</Album>
                <Album>X & Y</Album>
                <Album>Viva La Vida or Death and All his Friends</Album>
                <Album>Mylo Xyloto</Album>
                <Album>Ghost Stories</Album>
                <Album>A Head Full of Dreams</Album>
                <Album>Everyday Life</Album>
            </ul>
        </>
    )
}
