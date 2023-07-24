import React from "react";
import "../../index.css";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <main className="error center">
      <h1>ERRORRRRRRRR.</h1>
      <h1>{error.status + " : " + error.statusText}</h1>
    </main>
  );
}
