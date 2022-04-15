import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import GameForm from "./GameForm";
// import MWlogo from "../MWlogo.png";
import styled from "styled-components";

const StyledWelcome = styled.div`
  .welcome-container {
    background-color: #e6fdff;
    font-size: 18px;
  }
  // img {
  //   width: 100px;
  //   height: 100px;
  // }

  @media screen and (max-width: 450px) {
    .welcome-container {
      font-size: 12px;
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
          <h1 className="text-center mb-4">
            Welcome back to <span className="h1 brand-style">WerdNerd</span>,{" "}
            {user["email"]}!
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="text-center mb-3">
            Welcome to <span className="h1 brand-style">WerdNerd</span>, fellow
            nerd!
          </h1>{" "}
          <div className="text-center">
            {/* <img className="m-0" src={MWlogo} alt="Merriam Webster Logo" /> */}
            <p className="mb-3">
              <span className="brand-style">WerdNerd</span> puts your
              word-matching skills to the test! Using Merriam-Webster&apos;s
              Collegiate® Thesaurus, each{" "}
              <span className="brand-style">WerdNerd</span> game pulls a
              randomly-selected synonym for each word in it&apos;s list so that
              each time you play, you&apos;re matching different word-synonym
              pairings. It&apos;s free, easy to play, and you just might learn
              something!
            </p>
            <p className="mb-3">
              Don&apos;t take our &quot;werd&quot; for it - Try it yourself with
              one of our original lists below, or sign-up/log-in to create
              custom ones!
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
        <div className="text-center mt-5">
          <Link to={`/study_lists/new`} className="btn btn-green">
            Make a new list
          </Link>
        </div>
      );
    } else {
      return (
        <div className="text-center mt-5">
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
          <div className="welcome-container card py-4 px-3 my-5 justify-content-center">
            {renderWelcomePage()}

            <div className="text-center mt-3">
              <GameForm user={user} error={error} setError={setError} />
            </div>

            {renderWelcomeLinks()}
          </div>
        </StyledWelcome>
      </div>
    </div>
  );
};

export default Welcome;
