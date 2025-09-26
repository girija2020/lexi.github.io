import { NavLink } from "react-router-dom";
import "./NavBar.css"; // optional if you prefer a CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
