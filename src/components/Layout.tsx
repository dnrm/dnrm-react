import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Width = styled.div<any>`
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Layout = (props: any) => {
  return (
    <Container>
      <Width>{props.children}</Width>
    </Container>
  );
};

export default Layout;
