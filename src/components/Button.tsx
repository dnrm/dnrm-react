import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<any>`
  border-radius: ${(props) => (props.inputGroup ? "0 8px 8px 0" : "8px")};
  cursor: pointer;
`;

export default function Button(props: any) {
  return (
    <>
      <StyledButton className="button bg-accent text-xl  font-space-grotesk p-2 px-4" {...props}>
        {props.children}
      </StyledButton>
    </>
  );
}
