import React from "react";
import ReactDOM from "react-dom";

const h1 = <h1>JSX</h1>;

const container = (
  <div id="container">
    {h1}
    <h1>BABEL</h1>
    <h1>PARCEL</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

