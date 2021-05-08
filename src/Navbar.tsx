import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
} from "react-router-dom";

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
import Crypto from "./pages/Crypto";
import Users from './pages/Users';

import styled from "styled-components";

import "./styles/navbar.scss";

const Container = styled.div`
    padding: 50px;
    color: #fff;
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Navbar(): React.ReactElement {
    return (
        <Router>
            <Nav />
        </Router>
    );
}

const Nav = () => {

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

    let query = useQuery();

    return (
        <>
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
                    <li>
                        <Link to="/users" className="nav-links">
                            Users
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
                        <StateTest message={query.get("message")} />
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
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route
                        path="/album/:name"
                        render={(props) => <Album name="" image="" {...props} />}
                    ></Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </>
    );
};
