import React from "react";
import "./sass/style.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          <h1>Food Villa</h1>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/search"
            >
              search
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/offers"
            >
              offers
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/help">
              Help
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/signin"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "#000" }} to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
