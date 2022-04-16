import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  .navbar-brand {
    font-family: "Rampart One", sans-serif;
    font-size: 32px;
    color: #ee500c;
    margin: 0px;
  }
  a:hover.navbar-brand {
    text-decoration: none;
  }
  .navbar {
    font-family: "Inter", sans-serif;
    background-color: #fcfdf1;
  }
  .btn-nav {
    background-color: #8ae7f5;
    color: #ff621f;
    font-weight: 600;
    text-decoration: none;
  }
  .btn-home {
    margin-right: 12px;
  }

  @media screen and (max-width: 450px) {
    .navbar-brand {
      font-size: 26px;
    }
    .btn-nav,
    .bi-house-fill {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 350px) {
    .navbar-brand {
      font-size: 20px;
    }
    .btn-nav,
    .bi-house-fill {
      font-size: 12px;
      padding-right: 6px;
      padding-left: 6px;
    }
    .btn-home {
      margin-right: 4px;
    }
  }
  @media screen and (min-width: 500px) {
    .btn-nav:hover {
      background-color: #ff621f;
      color: #8ae7f5;
      box-shadow: 3px 3px 5px 2px rgba(0, 184, 165, 0.4);
    }
  }
`;

const Nav = ({ setUser }) => {
  const renderUserButtons = () => {
    const token = localStorage.getItem("auth_token");
    if (token)
      return (
        <Link
          to={"/"}
          className="btn btn-nav"
          onClick={() => {
            localStorage.clear();
            setUser({});
          }}
        >
          Log Out
        </Link>
      );
    else
      return (
        <Link className="btn btn-nav" to={"/users/login"}>
          Log In/Sign Up
        </Link>
      );
  };

  return (
    <StyledNav>
      <nav className="navbar p-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            WerdNerd
          </Link>
          <div className="navbar-nav">
            <ul className="nav d-flex align-items-center">
              <li className="nav-item">
                <Link to={"/"} className="btn btn-nav btn-home">
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
