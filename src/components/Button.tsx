import React from 'react';
import '../styles/rainbow.scss';
import styled from 'styled-components';

const StyledButton = styled.button<any>`
    border-radius: ${ props => props.inputGroup ? '0 8px 8px 0' : '8px' };
    cursor: pointer;
`;

export default function Button(props: any) {
    return (
        <>
            <StyledButton className="button rainbow-btn" {...props}>{props.children}</StyledButton>
        </>
    )
}