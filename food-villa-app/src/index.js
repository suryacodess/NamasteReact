import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Cart from "./pages/cart/Cart";
import Signin from "./pages/signin/Signin";
import Offers from "./pages/offers/Offers";
import Help from "./pages/help/Help";
import Error from "./pages/error/Error";
import Search from "./pages/search/Search";
import RestroDetails from "./pages/restroDetails/RestroDetails";

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/restraunt/:id",
    element: <RestroDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp} />);
