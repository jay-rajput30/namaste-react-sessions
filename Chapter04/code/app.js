import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import { Header as MyHeader } from "./components/Header";
import "./index.css";
import { Main } from "./components/Main";
import Error from "./components/Error";
import { About } from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import Login from "./components/Login";
import LoginProvider from "./contexts/LoginProvider";
import ProtectedRoute from "./components/ProtectedRoute";

const root = createRoot(document.getElementById("root"));
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="container">
      <MyHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
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
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        ),
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "/restaurant/:restId",
        element: (
          <ProtectedRoute>
            <Restaurant />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "login", element: <Login /> },
]);
root.render(
  <LoginProvider>
    <RouterProvider router={approuter} />
  </LoginProvider>
);
