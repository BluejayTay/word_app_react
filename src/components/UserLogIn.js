import { useState, useEffect } from "react";
import UserLogInForm from "./UserLogInForm";
import UserSignUpForm from "./UserSignUpForm";

const UserLogIn = ({ setUser, user }) => {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState("login");

  useEffect(() => {
    user
      ? setMessage(`Currently logged-in as: ${user["email"]}!`)
      : setMessage(`Not logged-in`);
  }, [user]);

  const renderForm = () => {
    switch (form) {
      case "signup":
        return <UserSignUpForm user={user} setUser={setUser} />;
      default:
        return <UserLogInForm user={user} setUser={setUser} />;
    }
  };

  return (
    <div>
      <div>{message}</div>
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
