import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  // {
  //   path: "/projects",
  //   element: <Projects />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
