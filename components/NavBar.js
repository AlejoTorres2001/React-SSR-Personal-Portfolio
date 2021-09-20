import React from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand brand">
            My Portfolio<i className="fas fa-portrait mx-1"></i>
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
            <li className="nav-item">
              <Link href="/Blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Github">
                <a className="nav-link">GitHub</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
