const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        D<span>.</span>T
      </div>

      <nav>
        <a href="#about">About</a>
        <a href="#practice">Practice</a>
        <a href="#cases">Cases</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar-location">
        Hell's Kitchen, NY
      </div>
    </header>
  );
};

export default Navbar;