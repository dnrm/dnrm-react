import './Dnrm.css';
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 8em;
    font-weight: 900;
    text-align: center;
    padding: 0;
`;

const Subheading = styled.h3`
    font-size: 2em;
    text-align: center;
`;

function Dnrm() {
    return (
        <>
            <Title className="gradient-text">Daniel Medina</Title>
            <Subheading className="text-3xl text-center sm:text-3xl lg:text-4xl">Web Developer</Subheading>
        </>
    )
}

export default Dnrm;