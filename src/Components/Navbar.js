import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div className="container">
      <nav>
        <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
          Movies
        </Link>
        <Link
          className={splitLocation[1] === "Students" ? "active" : ""}
          to="Students"
        >
          Records
        </Link>
        <Link
          className={splitLocation[1] === "message" ? "active" : ""}
          to="message"
        >
          Message
        </Link>
        <div id="indicator"></div>
      </nav>
    </div>
  );
};

export default Navbar;
