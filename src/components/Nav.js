import { Link } from "react-router-dom";
//import "./Nav.css";
import styled from "styled-components";

const StyledNav = styled.nav`
  .navbar-brand {
    font-family: "Rampart One", sans-serif;
    font-size: 32px;
    color: #ee500c;
  }
  a:hover.navbar-brand {
    text-decoration: none;
    color: #ff621f;
  }
  .navbar {
    font-family: "Inter", sans-serif;
    background-color: #fcfdf1;
  }
  .btn-login,
  .btn-logout {
    background-color: #ff621f;
    color: #e7fb9d;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
  }
  .btn-login:hover {
    background-color: #e7fb9d;
    color: #ff621f;
  }
  .btn-home {
    background-color: #8ae7f5;
    color: #ff621f;
    text-decoration: none;
  }
  .btn-home:hover {
    background-color: #ff621f;
    color: #8ae7f5;
  }
  .bi-house-fill {
    font-size: 20px;
  }
`;

const Nav = ({ setUser }) => {
  const renderUserButtons = () => {
    const token = localStorage.getItem("auth_token");
    if (token)
      return (
        <Link
          to={"#"}
          className="btn btn-logout"
          onClick={() => {
            localStorage.clear();
            setUser({});
          }}
        >
          Log out
        </Link>
      );
    else
      return (
        <Link className="btn btn-login" to={"/users/login"}>
          Log in/Sign up
        </Link>
      );
  };

  return (
    <StyledNav>
      <nav className="navbar p-0">
        <div className="container-fluid ">
          <Link className="navbar-brand" to={"/"}>
            WerdNerd
          </Link>
          <div className="navbar-nav">
            <ul className="nav d-flex align-items-center">
              <li className="nav-item">
                <Link to={"/"} className="btn btn-home me-3">
                  <i className="bi bi-house-fill"></i>
                </Link>
              </li>
              <li className="nav-item">{renderUserButtons()}</li>
            </ul>
          </div>
        </div>
      </nav>
    </StyledNav>
  );
};

export default Nav;
