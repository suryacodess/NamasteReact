import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [user, setUser] = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="login h-screen w-full ">
      <div className="form pt-52 flex flex-col max-w-2xl mx-auto">
        <input
          type="text "
          placeholder="enter name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          style={{
            width: "100%",
            border: "1px solid #000",
            padding: "10px",
            outline: "none",
            margin: "10px 0",
          }}
        />
        <input
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{
            width: "100%",
            border: "1px solid #000",
            padding: "10px",
            outline: "none",
            margin: "10px 0",
          }}
        />
        <button
          onClick={() => {
            setUser(userName);
          }}
          style={{
            width: "100%",
            border: "1px solid #000",
            padding: "10px",
            outline: "none",
            margin: "10px 0",
          }}
          className="bg-black text-white py-[11px] px-10"
        >
          Signin
        </button>

        <div className="data py-10 mx-auto w-full">
          user:
          <h1 className="text-2xl font-bold">{user}</h1>
        </div>
      </div>
    </section>
  );
}
