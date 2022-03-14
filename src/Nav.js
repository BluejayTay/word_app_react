import React from "react";
import { Link } from "react-router-dom";
//import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand ms-3 ms-lg-5" to="/">
        WerdNerd
      </Link>
    </nav>
  );
};

export default Nav;
