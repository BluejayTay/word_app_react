import { useState } from "react";
import { API_ROOT } from "../../apiRoot";
import axios from "axios";

const UserLogInForm = ({ setUser, setToWelcome, setError, setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();

    setLoading(true);
    axios
      .post(`${API_ROOT}api/users/login`, {
        user: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        sessionStorage.setItem("auth_token", response.data.auth_token);
        setLoading(false);
        setUser(response.data.user);
        setToWelcome(true);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(
          "Error: Please make sure your email and password are correct and try again."
        );
      });
  };

  return (
    <div>
      <h1 className="h1 brand-style text-center mt-4">Log In</h1>
      <form onSubmit={handleLogIn}>
        <div className="container d-flex justify-content-center p-0">
          <div className="form-group row g-0 col-10 col-md-6 mt-3">
            <label htmlFor="email">Email:</label>

            <input
              className="ps-1 mt-1 mb-2"
              placeholder="email"
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              className="ps-1 my-1"
              type="password"
              autoComplete="current-password"
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="btn btn-green mt-5" type="submit">
              Log into <span className="brand-style">WerdNerd!</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserLogInForm;
