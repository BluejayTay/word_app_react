import { useState } from "react";
import { API_ROOT } from "../apiRoot";
import axios from "axios";

const UserLogInForm = ({ setUser, setIsLoggedIn, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();

    axios
      .post(`${API_ROOT}api/users/login`, {
        user: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        localStorage.setItem("auth_token", response.data.auth_token);
        setUser(response.data.user);
        console.log(response.data);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        setError(
          "Error: Please make sure the email and password are correctly entered and try again."
        );
      });
  };

  return (
    <div>
      <h1 className="brand-style text-center mt-4">Log In</h1>
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
              Log Into <span className="brand-style">WerdNerd!</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserLogInForm;
