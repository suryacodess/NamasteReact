import React from "react";
import ReactDOM from "react-dom/client";

const h1 = <h1>JSX</h1>;

const Container = () => (
  <div id="container">
    {h1}
    <h1>BABEL</h1>
    <h1>PARCEL</h1>
  </div>
);

// JSX
// JSX is developed by facebook engineers, jSX is known as Javascript XML
// JSX is a html like syntax which is combination of html and javascript
// JSX let developers use html inside the javascript
// JSX uses babel to convert jsx into html object
// behind the scenes jsx uses createElement only

// KEYS
// In react keys are important, with keys react can track the code in the application
// with keys react can track a element which is edited, added or deleted.
// keys should be unique
// keys are assigned to the list of elements and often used in the arrays of elements

// BABEL
// Babel is a javascript library which is used to convert higher version code into low version code
// for browser compatibilty, babel uses BrowserList library

// Everything in react is a component
// component are two types -
// - Functional Component
// - Class based Component

// Functional Component is nothing but a function which returns react.element or a JSX

const Heading = () => {
  return (
    <>
      <Container />
      {Container()}
      <header>
        <h1>Heading</h1>
      </header>
      <section className="hero">
        <h1>Hero</h1>
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(Heading());
root.render(<Heading />);
