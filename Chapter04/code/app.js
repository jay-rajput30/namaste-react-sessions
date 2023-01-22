import React from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import { Header as MyHeader } from "./components/Header";
import "./index.css";
import { Main } from "./components/Main";
import Error from "./components/Error";
import { About } from "./components/About";
import Contact from "./components/Contact";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Default from "./components/Default";
import Restaurant from "./components/Restaurant";

const root = createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div className="container">
      <MyHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Main /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "/restaurant/:restId", element: <Restaurant /> },
    ],
  },
]);
root.render(<RouterProvider router={approuter} />);
