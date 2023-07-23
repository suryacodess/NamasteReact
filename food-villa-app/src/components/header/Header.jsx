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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
      </nav>
    </header>
  );
}
