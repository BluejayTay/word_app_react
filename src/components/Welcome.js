import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import GameForm from "./GameForm";

const Welcome = ({ user }) => {
  const [error, setError] = useState("");

  return (
    <div>
      <ErrorMessage error={error} setError={setError} />
      <div className="container">
        <h1 className="text-center mt-5">
          Welcome, {user["email"] || `fellow nerd`}!
        </h1>

        <div className="form text-center mt-5">
          <h2>
            Play <span className="brand-style">WerdWeb</span> now!
          </h2>
          <GameForm user={user} error={error} setError={setError} />
        </div>
        <div>
          <Link to={`/study_lists/new`} className="btn btn-new">
            Make a new word list!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
