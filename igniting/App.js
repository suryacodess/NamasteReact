import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { id: "title" }, "Igniting the app");
const h2 = React.createElement("h2", { id: "title" }, "Igniting the app");

const container = React.createElement("div", { id: "container" }, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

// We can create react application wihtout create-react-app
// React uses bundlers to create production ready application, In this we will use parcel which follows -
// - Bundling
// - Minifying
// - Removing consolelogs
// - Cleaning code
// - Zero config
// - Hot Reloading - HMR, HMR stands for Hot module Replacement which uses file watching alogorithm
// which is written in cpp, basically hot reloading reloads the file when ever file got saved
// - Caching > parcel cache
// - Craetes a Server
// - Https, http
// - Image optimisation
// - Compatibilty with older version web browsers
// - port numbers
// - Consistant hashing algorithm

// To create react application will use parcel
// 1. npm init -y
// 2. npm install -D parcel ( -D means dependency for development )
// 3. npm install react
// 4. npm install react-dom
// 5. npx parcel index.html

// PARCEL IS BEAST

// package.json tracks all the dependency which are downloaded
// package.lock.json holds the exact version of the dependency
// node_modules acts like a database here which stores all dependencies