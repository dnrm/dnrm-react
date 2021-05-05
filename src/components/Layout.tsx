import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Width = styled.div`
    padding: 5rem;
`;

const Layout = (props: any) => {
    return (
        <Container>
            <Width>{props.children}</Width>
        </Container>
    );
};

export default Layout;
