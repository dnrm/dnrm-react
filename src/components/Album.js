import React from 'react'

import '../styles/album.css';

export default function Album({ image, children }) {
    return (
        <div className="album">
            {image ? <img src={image} alt="Album Cover" className="cover" /> : null}
            <p className="name">{ children }</p>
        </div>
    )
}
