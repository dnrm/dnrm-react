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
  max-width: 768px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 15vh;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const Layout = (props: any) => {
  return (
    <Container>
      {props.img ? <Image src={props.img} alt="banner" /> : null}
      <Width>{props.children}</Width>
    </Container>
  );
};

export default Layout;
