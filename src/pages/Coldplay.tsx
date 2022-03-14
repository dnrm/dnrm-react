import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Album from '../components/Album';
import Layout from '../components/Layout';

import '../styles/hr.css';
import '../styles/albums.scss';

const Title = styled.h1`
    font-size: 3em;
    padding-bottom: 25px;
`;

const Subtitle = styled.h3`
    font-size: 2em;
    padding: 5px 0;
`;

interface AlbumType {
    image: string;
    name: string;
}

export default function Coldplay() {
    let albums: Array<AlbumType> = [
        {
            image: 'https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0',
            name: 'Parachutes',
        },
        {
            image: 'https://i.scdn.co/image/ab67616d0000b27390afd8e4ec6d787114ed6c40',
            name: 'A Rush of Blood to the Head',
        },
        {
            image: 'https://i.scdn.co/image/ab67616d0000b2734e0362c225863f6ae2432651',
            name: 'X&Y',
        },
        {
            image: 'https://i.scdn.co/image/ab67616d0000b273e21cc1db05580b6f2d2a3b6e',
            name: 'Viva La Vida',
        },
        {
            image: 'https://i.scdn.co/image/ab67616d0000b273de0cd11d7b31c3bd1fd5983d',
            name: 'Mylo Xyloto',
        },
        {
            image: 'https://i.scdn.co/image/ab67616d0000b273f864bcdcc245f06831d17ae0',
            name: 'Ghost Stories',
        },
        {
            image: 'https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6',
            name: 'A Head Full of Dreams',
        },
        {
            image: 'https://i.scdn.co/image/ab67616d0000b273733913465adb99353020b805',
            name: 'Everyday Life',
        },
        {
            image: 'https://i.scdn.co/image/ab67616d0000b273ec10f247b100da1ce0d80b6d',
            name: 'Music of the Spheres',
        },
    ];

    return (
        <Layout>
            <Helmet>
                <title>Coldplay | Daniel Medina</title>
            </Helmet>
            <Title className="font-work">Coldplay</Title>
            <hr />
            <Subtitle>Albums</Subtitle>
            <div id="albums-list">
                {albums.map((i) => {
                    return (
                        <Album image={i.image} key={i.name}>
                            {i.name}
                        </Album>
                    );
                })}
            </div>
            <br />
        </Layout>
    );
}
