/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Link from 'next/link';

import "./styles/navbar.scss";

export default function Navbar() {
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

  return (
    <>
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars"></i>
        </span>
        <Link href="/" className="logo">
          Home
        </Link>
        <ul className="main-nav">
        {/* className="nav-links" */}
          <li>
            <Link
              href="/dnrm"
            >
              <a>Dnrm</a>
            </Link>
          </li>
          <li>
            <Link
              href="/state-test"
            >
              <a>State Test</a>
            </Link>
          </li>
          <li>
            <Link
              href="/add-to-array"
            >
              <a>Add to array</a>
            </Link>
          </li>
          <li>
            <Link
              href="/effect"
            >
              <a>useEffect Test</a>
            </Link>
          </li>
          <li>
            <Link
              href="/coldplay"
            >
              <a>Coldplay</a>
            </Link>
          </li>
          <li>
            <Link
              href="/package"
            >
              <a>Package</a>
            </Link>
          </li>
          <li>
            <Link
              href="/crypto"
            >
              <a>Crypto</a>
            </Link>
          </li>
          <li>
            <Link
              href="/users"
            >
              <a>Users</a>
            </Link>
          </li>
          <li>
            <Link
              href="/spotify"
            >
              <a>Spotify</a>
            </Link>
          </li>
          <li>
            <Link
              href="/postgresql"
            >
              <a>PostgreSQL</a>
            </Link>
          </li>
          <li>
            <Link
              href="/account"
            >
              <a>Account</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
