import styled from 'styled-components';

const StyledInput = styled.input<any>`
    font-size: 1.2em;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: ${ props => props.inputGroup ? '8px 0 0 8px' : '8px' };
    outline: none;
    color: black;
`;


export default function Input(props: any) {
    return (
        <StyledInput placeholder="Type here..." {...props}>{props.children}</StyledInput>
    )
}