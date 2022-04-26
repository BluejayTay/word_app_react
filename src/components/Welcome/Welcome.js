import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import LoadingSpin from "react-loading-spin";
import MWlogo from "../../MWlogo.png";
import GameForm from "./GameForm";
import GuestMessage from "./GuestMessage";
import UserMessage from "./UserMessage";
import Instructions from "./Instructions";
import styled from "styled-components";

const StyledWelcome = styled.div`
  .welcome-container {
    background-color: #e6fdff;
    font-size: 16px;
    margin-top: 48px;
    padding: 24px;
    justify-content: center;
  }
  #header {
    margin-bottom: 16px;
  }
  #footer {
    background-color: white;
    font-size: 12px;
    display: flex;
    margin-bottom: 48px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 450px) {
    .welcome-container {
      font-size: 12px;
      margin-top: 4px;
      padding: 16px;
    }
    #header {
      margin-bottom: 10px;
    }
    .h1 {
      font-size: 20px;
    }
    .h5 {
      font-size: 14px;
    }
    #footer {
      margin-bottom: 4px;
    }
  }
`;

const Welcome = ({ user }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const renderWelcomeMessage = () => {
    const token = sessionStorage.getItem("auth_token");
    if (token) return <UserMessage user={user} />;
    else return <GuestMessage />;
  };

  const renderWelcomeLinks = () => {
    const token = sessionStorage.getItem("auth_token");
    if (token) {
      return (
        <div className="text-center mt-5 mb-1">
          <Link to={`/study_lists/new`} className="btn btn-green">
            Make a new list
          </Link>
        </div>
      );
    } else {
      return (
        <div className="text-center mt-5 mb-1">
          <Link to={`/users/login`} className="btn btn-green">
            Sign-up/Log-in to make a new list!
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      <div className="container d-flex justify-content-center">
        <StyledWelcome>
          <div className="welcome-container card-body rounded-top shadow-lg">
            {renderWelcomeMessage()}
            <Instructions />
            <div className="text-center">
              {loading ? <LoadingSpin /> : null}
              <GameForm
                user={user}
                setLoading={setLoading}
                setError={setError}
              />
            </div>
            {renderWelcomeLinks()}
          </div>
          <div id="footer" className="card-footer shadow-lg p-1">
            <div>
              This app uses Merriam-Webster&apos;s Collegiate® Thesaurus
            </div>
            <img className="mw-img" src={MWlogo} alt="Merriam Webster Logo" />
          </div>
        </StyledWelcome>
      </div>
    </div>
  );
};

export default Welcome;
