import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import GameForm from "./GameForm";
import styled from "styled-components";

const StyledWelcome = styled.div`
  .welcome-container {
    background-color: #e6fdff;
  }
`;

const Welcome = ({ user }) => {
  const [error, setError] = useState("");

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      <div className="container d-flex justify-content-center">
        <StyledWelcome>
          <div className="welcome-container card p-5 my-5 justify-content-center">
            <h1 className="text-center mt-5">
              Welcome, {user["email"] || `fellow nerd`}!
            </h1>

            <div className="text-center mt-5">
              <GameForm user={user} error={error} setError={setError} />
            </div>
            <div className="text-center mt-4">
              <Link to={`/study_lists/new`} className="btn btn-new">
                Make a new word list
              </Link>
            </div>
          </div>
        </StyledWelcome>
      </div>
    </div>
  );
};

export default Welcome;
