import React from 'react'
import { useParams } from 'react-router-dom'

export default function Album() {

    const { name } = useParams();

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
