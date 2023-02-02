import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/LoginProvider";
let logo = require("../assets/logo.jpg");
const activeClassName = "active-nav";

const Logo = () => {
  return <img className="logo" src={logo} />;
};
const LoggedInUser = () => {
  return true;
};
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const { loggedInUser } = useLogin();
  console.log({ isLoggedIn });
  const navigate = useNavigate();
  const btnClickHandler = () => {
    console.log({ insideFunc: isLoggedIn });
    setIsLoggedIn(true);
    navigate("/login");
  };
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <button
        onClick={btnClickHandler}
        style={{
          backgroundColor: "white",
          color: "purple",
          width: "5vw",
        }}
      >
        {loggedInUser.loginStatus === true ? "logout" : "login"}
      </button>
    </header>
  );
};

export { Header };
