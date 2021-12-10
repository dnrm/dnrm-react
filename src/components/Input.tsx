import styled from 'styled-components';

const StyledInput = styled.input<any>`
    font-size: 1.2em;
    padding: 10px;
    border-radius: ${(props) => (props.inputGroup ? '8px 0 0 8px' : '8px')};
    outline: none;
    color: black;
    width: 100%;
`;

export default function Input(props: any) {
    return (
        <StyledInput
            placeholder="Type here..."
            {...props}
            className="font-space-grotesk"
        >
            {props.children}
        </StyledInput>
    );
}
