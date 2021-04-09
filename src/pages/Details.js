import React from 'react'
import { useParams } from 'react-router-dom';

export default function Details(props) {

    let { name } = useParams();

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
