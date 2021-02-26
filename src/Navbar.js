import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dnrm from './Dnrm';
import AddToArray from './AddToArray';
import StateTest from './StateTest';

import styled from 'styled-components';

const Styled = styled.div`
    position: fixed;
    width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  padding: 0;
`;

export default function Navbar() {
    return (
        <Router>
            <Styled>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/dnrm">Dnrm</Link>
                    </li>
                    <li>
                    <Link to="/state-test">State Test</Link>
                    </li>
                    <li>
                    <Link to="/add-to-array">Add to array</Link>
                    </li>
                </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Container>
                    <Switch>
                    <Route path="/dnrm">
                        <Dnrm />
                    </Route>
                    <Route path="/add-to-array">
                        <AddToArray />
                    </Route>
                    <Route path="/state-test">
                        <StateTest />
                    </Route>
                    <Route path="/">
                        <Dnrm />
                    </Route>
                    </Switch>
                </Container>
            </Styled>
        </Router>
    )
}