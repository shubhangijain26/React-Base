import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import RestrauntDetails from "./components/RestrauntDetails";
import { Body } from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

const AppLayout = () => (
  <div className="main-container">
    <Header />
    <Outlet />
  </div>
);

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "restraunt/:resId",
        element: <RestrauntDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
