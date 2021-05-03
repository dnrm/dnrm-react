import React from 'react';
import '../styles/rainbow.scss';

export default function Button(props) {
    return (
        <button class="button rainbow-btn" onClick={props.onClick}>{props.children}</button>
    )
}