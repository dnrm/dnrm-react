import React, { useEffect } from "react";
import Link from 'next/link';
import "./styles/navbar.scss";

export default function Nav() {
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
        <Link href="/">
          <a className="logo">Home</a>
        </Link>
        <ul className="main-nav">
          <li>
            <Link
              href="/dnrm"
              >
              <a className="nav-links">Dnrm</a>
            </Link>
          </li>
          <li>
            <Link
              href="/state-test"
              >
              <a className="nav-links">State Test</a>
            </Link>
          </li>
          <li>
            <Link
              href="/add-href-array"
              >
                <a className="nav-links">Add href array</a>
            </Link>
          </li>
          <li>
            <Link
              href="/effect"
              >
              <a className="nav-links">useEffect Test</a>
            </Link>
          </li>
          <li>
            <Link
              href="/coldplay"
              >
              <a className="nav-links">Coldplay</a>
            </Link>
          </li>
          <li>
            <Link
              href="/package"
              >
              <a className="nav-links">Package</a>
            </Link>
          </li>
          <li>
            <Link
              href="/crypto"
              >
              <a className="nav-links">Crypto</a>
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              >
              <a className="nav-links">Users</a>
            </Link>
          </li>
          <li>
            <Link
              href="/spotify"
              >
              <a className="nav-links">Spotify</a>
            </Link>
          </li>
          <li>
            <Link
              href="/postgresql"
              >
              <a className="nav-links">PostgreSQL</a>
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              >
              <a className="nav-links">Account</a>
            </Link>
          </li>
          <li>
            <Link
              href="/charts"
              >
              <a className="nav-links">Charts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
