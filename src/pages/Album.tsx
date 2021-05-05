import React from "react";
import { useParams } from "react-router-dom";

interface Props {
    image: string;
    name: string;
}

export default function Album(props: Props) {
    const { name } = useParams<any>();

    return (
        <div>
            <img src={props.image} alt="Album cover" />
            <h1>{name}</h1>
        </div>
    );
}
