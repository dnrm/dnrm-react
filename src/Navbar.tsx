import React, { useState, useRef } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useLocation,
} from 'react-router-dom';
import anime from 'animejs';

import Home from './pages/Home';
import AddToArray from './pages/AddToArray';
import StateTest from './pages/StateTest';
import Effect from './pages/Effect';
import Coldplay from './pages/Coldplay';
import Hidden from './pages/Hidden';
import Details from './pages/Details';
import Album from './pages/Album';
import Crypto from './pages/Crypto';
import Spotify from './pages/Spotify';
import Postgresql from './pages/Postgresql';
import Charts from './pages/Charts';
import Ily from './pages/Ily';
import Message from './pages/Message';

import SignUp from './components/SignUp';
import Login from './components/Login';

import './styles/navbar.scss';

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
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    const navbarRef = useRef(null);

    const toggleNavbar = () => {
        if (navbarOpen) {
            anime({
                targets: '.main-nav',
                duration: 500,
                opacity: 0,
                complete: function () {
                    // @ts-ignore
                    navbarRef.current.style.display = 'none';
                },
            });
        } else {
            anime({
                targets: '.main-nav',
                duration: 500,
                opacity: 1,
                begin: function () {
                    // @ts-ignore
                    navbarRef.current.style.display = 'block';
                },
            });
        }
        setNavbarOpen(!navbarOpen);
    };

    let query = useQuery();

    return (
        <>
            <div className="py-8 flex justify-center">
                <nav
                    className={`navbar z-50 flex flex-col justify-between items-start w-full bg-none px-5 md:px-20 lg:px-64`}
                >
                    <div className="flex flex-row justify-between items-center w-full mb-2">
                        <Link
                            to="/"
                            className="logo text-2xl text-white font-space-grotesk"
                        >
                            Home
                        </Link>
                        <span
                            onClick={toggleNavbar}
                            className={`navbar-toggle cursor-pointer`}
                            id="js-navbar-toggle"
                        >
                            <i className="fas fa-bars"></i>
                        </span>
                    </div>
                    <ul
                        ref={navbarRef}
                        className={`main-nav hidden w-full md:flex-row justify-center items-center flex-col`}
                        onClick={toggleNavbar}
                    >
                        <li className="hover:bg-gray-600 w-full block">
                            <NavLink
                                activeClassName="bg-accent"
                                to="/state-test"
                                className="py-2 block px-2 font-space-grotesk text-sm"
                            >
                                State Test
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-600 w-full block">
                            <NavLink
                                activeClassName="bg-accent"
                                to="/add-to-array"
                                className="py-2 block px-2 font-space-grotesk text-sm"
                            >
                                Add to array
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-600 w-full block">
                            <NavLink
                                activeClassName="bg-accent"
                                to="/effect"
                                className="py-2 block px-2 font-space-grotesk text-sm"
                            >
                                useEffect Test
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-600 w-full block">
                            <NavLink
                                activeClassName="bg-accent"
                                to="/coldplay"
                                className="py-2 block px-2 font-space-grotesk text-sm"
                            >
                                Coldplay
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-600 w-full block">
                            <NavLink
                                activeClassName="bg-accent"
                                to="/crypto"
                                className="py-2 block px-2 font-space-grotesk text-sm"
                            >
                                Crypto
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-600 w-full block">
                            <NavLink
                                activeClassName="bg-accent"
                                to="/spotify"
                                className="py-2 block px-2 font-space-grotesk text-sm"
                            >
                                Spotify
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-600 w-full block">
                            <NavLink
                                activeClassName="bg-accent"
                                to="/postgresql"
                                className="py-2 block px-2 font-space-grotesk text-sm"
                            >
                                PostgreSQL
                            </NavLink>
                        </li>
                        <li className="hover:bg-gray-600 w-full block">
                            <NavLink
                                activeClassName="bg-accent"
                                to="/charts"
                                className="py-2 block px-2 font-space-grotesk text-sm"
                            >
                                Charts
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div></div>
            <section className="main-content text-white py-12">
                <Switch>
                    <Route path="/add-to-array">
                        <AddToArray />
                    </Route>
                    <Route path="/state-test">
                        <StateTest message={query.get('message')} />
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
                    <Route path="/message">
                        <Message />
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
            </section>
        </>
    );
};
