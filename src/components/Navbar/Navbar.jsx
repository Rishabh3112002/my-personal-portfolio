import React from "react";
import "./Navbar.css";

function Navbar () {
  return (
    <nav className="navbar1">
      <ul className="navbar-nav1">
        <li className="nav-item-first1">
          <a href="#" className="nav-link1">
            Home
          </a>
        </li>
        <li className="nav-item1">
          <a href="#" className="nav-link1">
            Projects
          </a>
        </li>
        <li className="nav-item1">
          <a href="#" className="nav-link1">
            Skills
          </a>
        </li>
        <li className="nav-item1">
          <a href="#" className="nav-link1">
            Experience
          </a>
        </li>
        <li className="nav-item1">
          <a href="#" className="nav-link1">
            Say Hello!
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
