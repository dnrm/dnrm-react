import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Album from "../components/Album";

import "../styles/hr.css";
import "../styles/albums.scss";

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
      image:
        "https://i.pinimg.com/originals/5b/c5/22/5bc522cf1e82f5299a738f9c324e9c59.jpg",
      name: "Parachutes",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71nadF3Iw2L._SL1300_.jpg",
      name: "A Rush of Blood to the Head",
    },
    {
      image:
        "https://i.pinimg.com/originals/c7/4f/62/c74f621b2a9423ee96bdd8fb4560fe03.jpg",
      name: "X&Y",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Viva_la_Vida_or_Death_and_All_His_Friends.jpg/220px-Viva_la_Vida_or_Death_and_All_His_Friends.jpg",
      name: "Viva La Vida",
    },
    {
      image:
        "https://img.discogs.com/KCBXJ-MOiYMgCW4rAM6oqT1k3Dc=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4086891-1354795426-6451.jpeg.jpg",
      name: "Mylo Xyloto",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81CFQ5cyltL._AC_SL1500_.jpg",
      name: "Ghost Stories",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/A1p7bWyAvmL._AC_SL1500_.jpg",
      name: "A Head Full of Dreams",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/A1iKwR302xL._SX522_.jpg",
      name: "Everyday Life",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Coldplay | Daniel Medina</title>
      </Helmet>
      <Title className="font-space-grotesk">Coldplay</Title>
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
    </>
  );
}
