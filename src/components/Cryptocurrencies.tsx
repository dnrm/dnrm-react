import React from "react";
import Item from "./Item";
import styled from "styled-components";

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const Cryptocurrencies = (props: any) => {
    
    const cryptocurrencies = [
        {
            name: 'Bitcoin',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bitcoin_logo.svg/1200px-Bitcoin_logo.svg.png',
        }
    ]

    return (
        <List>
            {cryptocurrencies.map(i => (
                <Item src={i.src}>
                    <h1>{i.name}</h1>
                </Item>
            ))}
        </List>
    );
};

export default Cryptocurrencies;
