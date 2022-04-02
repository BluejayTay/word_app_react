import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import "./Nav.css";

const Nav = ({ user, setUser }) => {
  const [message, setMessage] = useState("");

  const renderUserButtons = () => {
    const token = localStorage.getItem("auth_token");
    if (token)
      return (
        <Link
          to="/"
          onClick={() => {
            localStorage.clear();
            setUser({});
          }}
        >
          Log out
        </Link>
      );
    else return <Link to={"/users/login"}>Sign-up/Log-in</Link>;
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    token ? setMessage(`Current user: ${user["email"]}`) : setMessage("");
  }, [user]);

  return (
    <nav style={{ backgroundColor: "silver" }}>
      <Link to="/">WerdNerd </Link>
      <span>{message}</span>
      {renderUserButtons()}
    </nav>
  );
};

export default Nav;
