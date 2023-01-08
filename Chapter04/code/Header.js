const Logo = () => {
  return <h2 className="logo">QuickBytes</h2>;
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
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
