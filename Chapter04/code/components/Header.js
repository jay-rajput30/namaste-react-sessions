import { useState } from "react";

const Logo = () => {
  return <h2 className="logo">QuickBytes</h2>;
};

const LoggedInUser = () => {
  return true;
};
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Wishlist</a>
        </li>
        <li>
          <a href="/blog">Cart</a>
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
