import React from 'react'
import { useParams } from 'react-router-dom'

export default function Album(props) {

    const { name } = useParams();

    return (
        <div>
            <img src={props.image} alt="Album cover" />
            <h1>{name}</h1>
        </div>
    )
}
