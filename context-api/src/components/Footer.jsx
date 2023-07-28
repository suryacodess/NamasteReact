import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Footer() {
  const user = useContext(UserContext);

  return (
    <footer className="w-full bg-black text-white py-10 px-10 flex justify-between items-center">
      <div className="">
        <h1 className="text-2xl font-bold">Context Api</h1>
        <p className="text-sm">All rights reserved.</p>
      </div>
      <div className="user">
        <h1 className="text-2xl font-bold">{user}</h1>
      </div>
    </footer>
  );
}
