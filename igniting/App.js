import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { id: "title" }, "Igniting the app");
const h2 = React.createElement("h2", { id: "title" }, "Igniting the app");

const container = React.createElement("div", {id:"container"}, [h1,h2])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);