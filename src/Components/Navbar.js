import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/">Movies</Link>
        <Link to="Students">Records</Link>
        <Link to="message">Message</Link>
        <div id="indicator"></div>
      </nav>
    </div>
  );
};

export default Navbar;
