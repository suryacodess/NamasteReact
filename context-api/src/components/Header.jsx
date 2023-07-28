import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Header() {
  const user = useContext(UserContext);

  return (
    <header className="flex justify-between items-center p-5">
      <div className="logo">
        <h1 className="text-2xl font-bold">Context api</h1>
      </div>
      <nav>
        <ul className="flex">
          <li className="list-none ml-4">Home</li>
          <li className="list-none ml-4">About</li>
          <li className="list-none ml-4">Shop</li>
          <li className="list-none ml-4">Careers</li>
          <li className="list-none ml-4">Contact</li>
          {user && <li className="list-none ml-4">hey, {user}</li>}
        </ul>
      </nav>
    </header>
  );
}
