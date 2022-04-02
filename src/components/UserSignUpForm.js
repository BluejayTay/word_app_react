import { useState } from "react";
import axios from "axios";

const UserSignUpForm = ({ setUser, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3000/api/users`, {
        user: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        localStorage.setItem("auth_token", response.data.auth_token);
        setUser(response.data.user);
        console.log(response.data.auth_token);
        console.log(response.data.user);
      });

    setIsLoggedIn(true);
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
        <button type="submit">Sign Up for WerdNerd!</button>
      </form>
    </div>
  );
};
export default UserSignUpForm;
