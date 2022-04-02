import { useState } from "react";
import UserLogInForm from "./UserLogInForm";
import UserSignUpForm from "./UserSignUpForm";
import { Redirect } from "react-router-dom";

const UserLogIn = ({ setUser, user }) => {
  const [form, setForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            user={user}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      default:
        return (
          <UserLogInForm
            user={user}
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
    }
  };

  return (
    <div>
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
