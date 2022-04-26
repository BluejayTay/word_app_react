import { useState } from "react";
import { API_ROOT } from "../../apiRoot";
import axios from "axios";

const UserSignUpForm = ({ setUser, setToWelcome, setError, setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    setLoading(true);
    axios
      .post(`${API_ROOT}api/users`, {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
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
          "Error: Please make sure to include a unique email and valid password. (passwords must be between 6-50 characters and match the password confirmation)"
        );
      });
  };

  return (
    <div>
      <h1 className="h1 brand-style text-center mt-4">Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="container d-flex justify-content-center p-0">
          <div className="form-group row g-0 col-10 col-md-6 mt-3">
            <label htmlFor="email">Email: </label>

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
              placeholder="password (6-50 characters)"
              autoComplete="new-password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <input
              className="ps-1"
              type="password"
              placeholder="password confirmation"
              autoComplete="new-password"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />

            <button className="btn btn-login mt-3" type="submit">
              Sign up for <span className="brand-style">WerdNerd</span>!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserSignUpForm;
