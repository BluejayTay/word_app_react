import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import GameForm from "./GameForm";
import MWlogo from "../../MWlogo.png";
import styled from "styled-components";

const StyledWelcome = styled.div`
  .welcome-container {
    background-color: #e6fdff;
    font-size: 18px;
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

  const renderWelcomePage = () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      return (
        <div>
          <h1 id="header" className="h1 text-center">
            Welcome back to <span className="h1 brand-style">WerdNerd</span>,{" "}
            {user["email"]}!
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1 id="header" className="h1 text-center">
            Welcome to <span className="h1 brand-style">WerdNerd</span>, fellow
            nerd!
          </h1>{" "}
          <div className="text-center">
            <p className="mb-2">
              <span className="brand-style">WerdNerd</span> uses
              Merriam-Webster&apos;s Collegiate® Thesaurus to create an
              educational game that puts your word-matching skills to the test!
            </p>
            <p className="mb-2">
              Don&apos;t take our &quot;werd&quot; for it - Try it yourself with
              one of our original lists below, or sign-up/log-in to create
              custom ones. It&apos;s free, easy to play, and you just might
              learn something!
            </p>
          </div>
        </div>
      );
    }
  };

  const renderWelcomeLinks = () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      return (
        <div className="text-center my-4">
          <Link to={`/study_lists/new`} className="btn btn-green">
            Make a new list
          </Link>
        </div>
      );
    } else {
      return (
        <div className="text-center my-4">
          <Link to={`/users/login`} className="btn btn-green">
            Sign up/Log in to make a new list!
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
            {renderWelcomePage()}
            <div>
              <h5 className="h5">How to play:</h5>
              <ol>
                <li>
                  Select a list to use for your game from the drop-down
                  selection below.
                </li>
                <li>Press the &quot;Play&quot; button to load the game.</li>
                <li>
                  Press &quot;Start&quot; to reveal the randomly-selected
                  synonyms and start the clock!{" "}
                </li>
                <li>
                  Match each word to their synonym by selecting the word on the
                  left and their synonym on the right. A correct match will be
                  revealed with an orange line connecting them together!
                </li>
                <li>
                  Once you&apos;ve found all the matches, the timer stops and
                  saves your time if you beat the record.
                </li>
              </ol>
            </div>
            <div className="text-center">
              <GameForm user={user} error={error} setError={setError} />
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
