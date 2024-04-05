import React from "react";
import "./Navbar.css";

function Navbar () {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item-first">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Say Hello!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
