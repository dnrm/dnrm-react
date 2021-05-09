import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Width = styled.div`
    max-width: 768px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Layout = (props: any) => {
    return (
        <Container>
            <Width>{props.children}</Width>
        </Container>
    );
};

export default Layout;
