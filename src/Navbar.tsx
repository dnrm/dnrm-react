import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
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
import Users from "./pages/Users";
import Spotify from "./pages/Spotify";
import Postgresql from './pages/Postgresql';

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
                        <NavLink activeClassName="activeLink" to="/dnrm" className="nav-links">
                            Dnrm
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/state-test" className="nav-links">
                            State Test
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/add-to-array" className="nav-links">
                            Add to array
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/effect" className="nav-links">
                            useEffect Test
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/coldplay" className="nav-links">
                            Coldplay
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/package" className="nav-links">
                            Package
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/crypto" className="nav-links">
                            Crypto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/users" className="nav-links">
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/spotify" className="nav-links">
                            Spotify
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="activeLink" to="/postgresql" className="nav-links">
                            PostgreSQL
                        </NavLink>
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
                    <Route path="/spotify">
                        <Spotify />
                    </Route>
                    <Route path="/postgresql">
                        <Postgresql />
                    </Route>
                    <Route
                        path="/album/:name"
                        render={(props) => (
                            <Album name="" image="" {...props} />
                        )}
                    ></Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </>
    );
};
