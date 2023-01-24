import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
let logo = require("../assets/logo.jpg");
// import error from "../assests/error.jpg";
const activeClassName = "active-nav";

const Logo = () => {
  return <img className="logo" src={logo} />;
};
// src="../assets/logo.png"
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
const Header = ({ isLoggedIn }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const btnClickHandler = () => {
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
        {isLoggedIn ? "logout" : "login"}
      </button>
    </header>
  );
};

export { Header };
