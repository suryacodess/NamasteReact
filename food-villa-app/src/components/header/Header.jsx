import React from "react";
import "./sass/style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Food Villa</h1>
      </div>

      <nav>
        <ul>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}
