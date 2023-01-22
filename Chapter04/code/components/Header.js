import { useState } from "react";
import { NavLink } from "react-router-dom";

const activeClassName = "active-nav";

const Logo = () => {
  return <img className="logo" src="../assests/quickbytes.jpg" />;
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
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const btnClickHandler = () => {
    setIsLoggedIn(isLoggedIn ? false : true);
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
