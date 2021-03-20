import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import Dnrm from "./Dnrm";
import AddToArray from "./AddToArray";
import StateTest from "./StateTest";
import Effect from "./Effect";
import Coldplay from './Coldplay';

import styled from "styled-components";

const Styled = styled.nav`
  width: 100%;
  display: flex;
`;

const List = styled.ul`
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: #6b705c;
`;

const Item = styled.li`
    display: inline;
    padding: 10px;
    font-size: 1.3em;
`;

const Container = styled.div`
  padding: 50px;
  color: #92593A;
`;

const linkStyles = {
    color: '#ffffff',
    textDecoration: 'none'
}

export default function Navbar() {
  return (
    <Router>
        <Styled>
            <List>
                <Item>
                <Link to="/" style={linkStyles}>Home</Link>
                </Item>
                <Item>
                <Link to="/dnrm" style={linkStyles}>Dnrm</Link>
                </Item>
                <Item>
                <Link to="/state-test" style={linkStyles}>State Test</Link>
                </Item>
                <Item>
                <Link to="/add-to-array" style={linkStyles}>Add to array</Link>
                </Item>
                <Item>
                <Link to="/effect" style={linkStyles}>useEffect Test</Link>
                </Item>
                <Item>
                  <Link to="/coldplay" style={linkStyles}>Coldplay</Link>
                </Item>
            </List>
        </Styled>
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
            <Route path="/effect">
                <Effect />
            </Route>
            <Route path="/coldplay">
              <Coldplay />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
    </Router>
  );
}
