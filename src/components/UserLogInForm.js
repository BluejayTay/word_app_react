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
      <h1 className="brand-style text-center mt-3">Log In</h1>
      <form onSubmit={handleLogIn}>
        <div className="container d-flex justify-content-center p-0">
          <div className="row g-0 col-10 col-md-6 col-lg-4">
            <label htmlFor="email">Email: </label>

            <input
              placeholder="email"
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              autoComplete="current-password"
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <button className="btn btn-green mt-3" type="submit">
              Log Into <span className="brand-style">WerdNerd!</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserLogInForm;
