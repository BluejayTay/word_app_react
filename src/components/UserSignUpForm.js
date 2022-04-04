import { useState } from "react";
import axios from "axios";

const UserSignUpForm = ({ setUser, setIsLoggedIn, setError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3000/api/users`, {
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
          "An error occurred while creating new user. Please make sure to use valid email formatting and that password entries match and try agian."
        );
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">
          <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="password confirmation">
          <input
            placeholder="password confirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up for WerdNerd!</button>
      </form>
    </div>
  );
};
export default UserSignUpForm;
