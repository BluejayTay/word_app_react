import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import GameForm from "./GameForm";

const Welcome = ({ user, successMessage, setSuccessMessage }) => {
  const guest = "fellow nerd";
  const [error, setError] = useState("");

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      <SuccessMessage
        successMessage={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
      <div className="container">
        <h1 className="text-center mt-5">
          Welcome to <span className="welcome-brand">WerdNerd</span>,{" "}
          {user["email"] || guest}!
        </h1>
        <h2 className="text-center">The place to play word games!</h2>
        <h2>
          Play <span className="welcome-brand">WerdWeb</span> now!
        </h2>
        <GameForm user={user} error={error} setError={setError} />
        <div>
          <Link to={`/study_lists/new`}>make a new word list!</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
