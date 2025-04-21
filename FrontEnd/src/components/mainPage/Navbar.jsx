import {Link} from 'react-router-dom';
import { useState } from 'react';
import "../mainPage/styles/Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-content">
      <h1 className="navbar-brand">
        Bidify
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNavDropdown"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Subscriptions</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="btn btn-default btn-login" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
