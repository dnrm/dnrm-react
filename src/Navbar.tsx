import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dnrm from "./pages/Dnrm";
import AddToArray from "./pages/AddToArray";
import StateTest from "./pages/StateTest";
import Effect from "./pages/Effect";
import Coldplay from "./pages/Coldplay";
import Hidden from "./pages/Hidden";
import Package from "./pages/Package";
import Details from "./pages/Details";
import Album from "./pages/Album";
import Crypto from './pages/Crypto';

import styled from "styled-components";

import "./styles/navbar.scss";

const Container = styled.div`
    padding: 50px;
    color: #fff;
`;

export default function Navbar(): React.ReactElement {
    useEffect(() => {
        document
            .querySelector(".navbar-toggle")!
            .addEventListener("click", () => {
                document.querySelector(".main-nav")!.classList.toggle("active");
            })!;

        return () => {
            document
                .querySelector(".navbar-toggle")!
                .removeEventListener("click", () => {
                    document
                        .querySelector(".main-nav")!
                        .classList.toggle("active");
                });
        };
    }, []);

    return (
        <Router>
            <nav className="navbar">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fas fa-bars"></i>
                </span>
                <Link to="/" className="logo">
                    Home
                </Link>
                <ul className="main-nav">
                    <li>
                        <Link to="/dnrm" className="nav-links">
                            Dnrm
                        </Link>
                    </li>
                    <li>
                        <Link to="/state-test" className="nav-links">
                            State Test
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-to-array" className="nav-links">
                            Add to array
                        </Link>
                    </li>
                    <li>
                        <Link to="/effect" className="nav-links">
                            useEffect Test
                        </Link>
                    </li>
                    <li>
                        <Link to="/coldplay" className="nav-links">
                            Coldplay
                        </Link>
                    </li>
                    <li>
                        <Link to="/package" className="nav-links">
                            Package
                        </Link>
                    </li>
                    <li>
                        <Link to="/crypto" className="nav-links">
                            Crypto
                        </Link>
                    </li>
                </ul>
            </nav>
            <Container className="main-content">
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
                    <Route path="/details/:id">
                        <Details />
                    </Route>
                    <Route path="/hidden">
                        <Hidden />
                    </Route>
                    <Route path="/package">
                        <Package />
                    </Route>
                    <Route path="/crypto">
                        <Crypto />
                    </Route>
                    <Route
                        path="/album/:name"
                        render={(props) => <Album {...props} />}
                    ></Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}
