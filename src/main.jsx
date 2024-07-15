import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./homepage.jsx";
import PageNotFound from "./PageNotFound.jsx";
import About from "./aboutme.jsx";
import Journey from "./journe.jsx";
import Works from "./works.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      // {
      //   path: "/Home",
      //   element: <Homepage />,
      // },
      {
        path: "/#Works",
        element: <Works />,
      },
      {
        path: "/#About",
        element: <About />,
      },
      {
        path: "/#Journey",
        element: <Journey />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
