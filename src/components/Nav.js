import { Link } from "react-router-dom";
//import "./Nav.css";

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
  );
};

export default Nav;
