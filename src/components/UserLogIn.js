import { useState } from "react";
import UserLogInForm from "./UserLogInForm";
import UserSignUpForm from "./UserSignUpForm";
import { Redirect } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const UserLogIn = ({ setUser }) => {
  const [form, setForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  if (isLoggedIn == true) {
    return (
      <Redirect
        to={{
          pathname: `/`,
        }}
      />
    );
  }

  const renderForm = () => {
    switch (form) {
      case "signup":
        return (
          <UserSignUpForm
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setError={setError}
          />
        );
      default:
        return (
          <UserLogInForm
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setError={setError}
          />
        );
    }
  };

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      <h1>User Sign-up/Log-in</h1>
      <div>
        <button
          onClick={() => {
            setForm("signup");
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            setForm("login");
          }}
        >
          Log in
        </button>
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};
export default UserLogIn;
