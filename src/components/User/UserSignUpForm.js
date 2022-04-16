import { useState } from "react";
import { API_ROOT } from "../../apiRoot";
import axios from "axios";

const UserSignUpForm = ({ setUser, setIsLoggedIn, setError, setIsLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    setIsLoading(true);
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
        setIsLoading(false);
        console.log(error);
        setError(
          "Error: Please make sure to include a unique email and valid password. (passwords must be between 6-50 characters and match the password confirmation)"
        );
      });
    setIsLoading(false);
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
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              className="ps-1 my-1"
              type="password"
              placeholder="password (6-50 characters)"
              onChange={(event) => setPassword(event.target.value)}
            />

            <input
              className="ps-1"
              type="password"
              placeholder="password confirmation"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />

            <button className="btn btn-green mt-3" type="submit">
              Sign up for <span className="brand-style">WerdNerd</span>!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserSignUpForm;