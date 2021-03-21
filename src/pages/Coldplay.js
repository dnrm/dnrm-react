import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Album from '../components/Album';

import '../styles/hr.css';

const Title = styled.h1`
    font-size: 3em;
    padding-bottom: 25px;
`;

const Subtitle = styled.h3`
    font-size: 2em;
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
                <Album image="https://i.pinimg.com/originals/5b/c5/22/5bc522cf1e82f5299a738f9c324e9c59.jpg">Parachutes</Album>
                <Album image="https://images-na.ssl-images-amazon.com/images/I/71nadF3Iw2L._SL1300_.jpg">A Rush of Blood to the Head</Album>
                <Album image="https://i.pinimg.com/originals/c7/4f/62/c74f621b2a9423ee96bdd8fb4560fe03.jpg">X&Y</Album>
                <Album image="https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Viva_la_Vida_or_Death_and_All_His_Friends.jpg/220px-Viva_la_Vida_or_Death_and_All_His_Friends.jpg">Viva La Vida or Death and All his Friends</Album>
                <Album image="https://img.discogs.com/KCBXJ-MOiYMgCW4rAM6oqT1k3Dc=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4086891-1354795426-6451.jpeg.jpg">Mylo Xyloto</Album>
                <Album image="https://images-na.ssl-images-amazon.com/images/I/81CFQ5cyltL._AC_SL1500_.jpg">Ghost Stories</Album>
                <Album image="https://www.elquintobeatle.com/wp-content/uploads/2015/12/coldplay-a-head-full-of-dreams-1b-1068x1068.jpg">A Head Full of Dreams</Album>
                <Album image="https://images-na.ssl-images-amazon.com/images/I/A1iKwR302xL._SX522_.jpg">Everyday Life</Album>
            </ul>
        </>
    )
}
