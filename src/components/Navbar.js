import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    padding: 5px;
`;

export default function Navbar() {
    return (
        <div>
            <h1>Website</h1>
            <ul>
                <li>
                    <Link href="https://dannermm.com">Home</Link>
                </li>
            </ul>
        </div>
    )
}
