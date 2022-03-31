import { useState, useEffect } from "react";
import axios from "axios";

const UserSignIn = ({ setUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [signedIn, setSignedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    user ? setMessage(`Hello, ${user["email"]}`) : setMessage(`Not signed in`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSignIn = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3000/api/users/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("auth_token", response.data.auth_token);
        setUser(response.data.user);
        console.log(response.data.auth_token);
        console.log(response.data.user);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">
          <input onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          <input onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign in!</button>
      </form>
      signed in status: {message}
    </div>
  );
};
export default UserSignIn;
