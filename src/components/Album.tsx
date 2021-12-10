import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/album.css';

export default function Album({ image, children }: any) {
    let url = children.replace(' ', '%20');

    return (
        <Link to={`/album/${url}`}>
            <div className="album">
                {image ? (
                    <img src={image} alt="Album Cover" className="cover" />
                ) : null}
                <p className="name">{children}</p>
            </div>
        </Link>
    );
}
