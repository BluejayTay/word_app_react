import { useState } from "react";
import { API_ROOT } from "../apiRoot";
import axios from "axios";

const UserSignUpForm = ({ setUser, setIsLoggedIn, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    axios
      .post(`${API_ROOT}api/users`, {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
      })
      .then((response) => {
        localStorage.setItem("auth_token", response.data.auth_token);
        setUser(response.data.user);
        setIsLoggedIn(true);
        console.log(response.data.auth_token);
        console.log(response.data.user);
      })
      .catch((error) => {
        console.log(error);
        setError(
          "Error: Please make sure the form is complete and password entries match and try agian."
        );
      });
  };

  return (
    <div>
      <h1 className="brand-style text-center mt-3">Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="container d-flex justify-content-center p-0">
          <div className="row g-0 col-10 col-md-6 col-lg-4">
            <label htmlFor="email">Email: </label>

            <input
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <input
              type="password"
              placeholder="password confirmation"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />

            <button className="btn btn-green mt-3" type="submit">
              Sign Up for <span className="brand-style">WerdNerd</span>!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserSignUpForm;
