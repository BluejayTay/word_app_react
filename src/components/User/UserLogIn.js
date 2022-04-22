import { useState } from "react";
import { Redirect } from "react-router-dom";
import UserLogInForm from "./UserLogInForm";
import UserSignUpForm from "./UserSignUpForm";
import ErrorMessage from "../ErrorMessage";
import LoadingDisplay from "../LoadingDisplay";
import styled from "styled-components";

const StyledLogin = styled.div`
  .login-container {
    background-color: #e6fdff;
    justify-content: enter;
    padding: 24px;
    margin-top: 48px;
  }
  .btn-active {
    background-color: #ff621f;
    color: #e6fdff;
    font-weight: 700;
  }
  .btn-inactive {
    background-color: #e6fdff;
    color: #ff621f;
    font-weight: 700;
    border: 1px solid #ff621f;
  }
  label {
    font-size: 18px;
  }
  .h1 {
    font-size: 38px;
  }
  @media screen and (min-width: 500px) {
    .btn-inactive:hover {
      background-color: #aeedf0;
    }
  }
`;

const UserLogIn = ({ setUser }) => {
  const [form, setForm] = useState("login");
  const [loading, setLoading] = useState(false);
  const [toWelcome, setToWelcome] = useState(false);
  const [error, setError] = useState("");

  if (toWelcome) {
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
            setToWelcome={setToWelcome}
            setError={setError}
            setLoading={setLoading}
          />
        );
      default:
        return (
          <UserLogInForm
            setUser={setUser}
            setToWelcome={setToWelcome}
            setError={setError}
            setLoading={setLoading}
          />
        );
    }
  };

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      {loading ? <LoadingDisplay /> : null}
      <div className="container justify-content-center">
        <StyledLogin>
          <div className="login-container card shadow-lg">
            <div className="row g-0 d-flex justify-content-center">
              <div className="col-md-8 col-lg-7 btn-group">
                <button
                  className={
                    form == "login" ? "btn btn-inactive" : "btn btn-active"
                  }
                  onClick={() => {
                    setForm("signup");
                  }}
                >
                  Sign Up
                </button>
                <button
                  className={
                    form == "signup" ? "btn btn-inactive" : "btn btn-active"
                  }
                  onClick={() => {
                    setForm("login");
                  }}
                >
                  Log In
                </button>
              </div>

              {renderForm()}
            </div>
          </div>
        </StyledLogin>
      </div>
    </div>
  );
};
export default UserLogIn;
