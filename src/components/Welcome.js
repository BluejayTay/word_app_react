import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import GameForm from "./GameForm";

const Welcome = ({ user }) => {
  const [error, setError] = useState("");
  const guest = "fellow nerd";

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      <div className="container">
        <h1 className="text-center my-5">
          Welcome to WerdNerd, {user["email"] || guest}!
        </h1>
        <h2>Play WerdWeb now!</h2>
        <GameForm user={user} error={error} setError={setError} />
        <div>
          <Link to={`/study_lists/new`}>make a new word list!</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
