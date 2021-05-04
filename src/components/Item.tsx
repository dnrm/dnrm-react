import React from 'react'
import styled from 'styled-components';

interface Props {
    src: string,
    children: any
}

const GridItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
`;

const Item: React.FC<Props> = (props: Props) => {
    return (
        <GridItem>
            <Image src={props.src} alt="Grid item"/>
        </GridItem>
    )
}

export default Item;
