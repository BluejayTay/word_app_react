import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import GameForm from "./GameForm";
import styled from "styled-components";

const StyledWelcome = styled.div`
  .welcome-container {
    background-color: #e6fdff;
  }
  .btn-new {
    position: relative;
    z-index: 0;
    border-radius: 5px; 
    background-color: #8ae7f5;
  }
  .btn-new:hover {
    box-shadow: 4px 4px 5px 2px rgba(0, 184, 0, 0.4);
    color: #e24216;
`;

const Welcome = ({ user }) => {
  const [error, setError] = useState("");
  const [listsAreRequested, setListsAreRequested] = useState(false);

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
              {listsAreRequested ? null : (
                <button
                  className="btn btn-play"
                  onClick={() => {
                    setListsAreRequested(true);
                  }}
                >
                  Play now!
                </button>
              )}
              {listsAreRequested ? (
                <GameForm user={user} error={error} setError={setError} />
              ) : null}
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
