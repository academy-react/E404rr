import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";
  import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    useRouteError,
    Outlet,
    Link,
    useNavigate,
    NavLink,
    useParams,
  } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);
