import { useState } from "react";
import axios from "axios";

const UserLogInForm = ({ setUser, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3000/api/users/login`, {
        user: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        localStorage.setItem("auth_token", response.data.auth_token);
        setUser(response.data.user);
        console.log(response.data);
      });

    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogIn}>
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
        <button type="submit">Log into WerdNerd!</button>
      </form>
    </div>
  );
};
export default UserLogInForm;
