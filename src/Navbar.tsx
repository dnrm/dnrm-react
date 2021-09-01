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
import AddToArray from "./pages/AddToArray";
import StateTest from "./pages/StateTest";
import Effect from "./pages/Effect";
import Coldplay from "./pages/Coldplay";
import Hidden from "./pages/Hidden";
import Details from "./pages/Details";
import Album from "./pages/Album";
import Crypto from "./pages/Crypto";
import Users from "./pages/Users";
import Spotify from "./pages/Spotify";
import Postgresql from "./pages/Postgresql";
import Charts from './pages/Charts'
import Ily from './pages/Ily';

import SignUp from "./components/SignUp";
import Login from "./components/Login";

import styled from "styled-components";

import "./styles/navbar.scss";

const Container = styled.div`
  padding: 50px;
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
    document.querySelector(".navbar-toggle")!.addEventListener("click", () => {
      document.querySelector(".main-nav")!.classList.toggle("active");
    })!;

    return () => {
      document
        .querySelector(".navbar-toggle")!
        .removeEventListener("click", () => {
          document.querySelector(".main-nav")!.classList.toggle("active");
        });
    };
  }, []);

  let query = useQuery();

  return (
    <>
      <nav className="navbar z-50 flex justify-between items-center px-3 bg-gray">
        <Link to="/" className="logo text-2xl text-white font-space-grotesk">
          Home
        </Link>
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars"></i>
        </span>
        <ul className="main-nav">
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/state-test"
              className="py-4 block px-3 font-space-grotesk"
            >
              State Test
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/add-to-array"
              className="py-4 block px-3 font-space-grotesk"
            >
              Add to array
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/effect"
              className="py-4 block px-3 font-space-grotesk"
            >
              useEffect Test
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/coldplay"
              className="py-4 block px-3 font-space-grotesk"
            >
              Coldplay
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/crypto"
              className="py-4 block px-3 font-space-grotesk"
            >
              Crypto
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/users"
              className="py-4 block px-3 font-space-grotesk"
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/spotify"
              className="py-4 block px-3 font-space-grotesk"
            >
              Spotify
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/postgresql"
              className="py-4 block px-3 font-space-grotesk"
            >
              PostgreSQL
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="bg-accent"
              to="/charts"
              className="py-4 block px-3 font-space-grotesk"
            >
              Charts
            </NavLink>
          </li>
        </ul>
      </nav>
      <Container className="main-content text-white">
        <Switch>
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
          <Route path="/ily">
            <Ily />
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/charts">
            <Charts />
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
