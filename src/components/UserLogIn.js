import { useState } from "react";
import UserLogInForm from "./UserLogInForm";
import UserSignUpForm from "./UserSignUpForm";
import { Redirect } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import LoadingDisplay from "./LoadingDisplay";
import styled from "styled-components";

const StyledLogin = styled.div`
  .login-container {
    background-color: #e6fdff;
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
  @media screen and (min-width: 500px) {
    .btn-inactive:hover {
      background-color: #aeedf0;
    }
  }
`;

const UserLogIn = ({ setUser }) => {
  const [form, setForm] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
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
            setIsLoading={setIsLoading}
          />
        );
      default:
        return (
          <UserLogInForm
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setError={setError}
            setIsLoading={setIsLoading}
          />
        );
    }
  };

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      {isLoading ? <LoadingDisplay /> : null}
      <div className="container justify-content-center">
        <StyledLogin>
          <div className="login-container card p-4 mt-5 shadow-lg justify-content-center">
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
