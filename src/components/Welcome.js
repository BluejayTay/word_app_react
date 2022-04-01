import GameForm from "./GameForm";
import { Link } from "react-router-dom";

const Welcome = ({ user }) => {
  const guest = "fellow nerd";

  return (
    <div>
      <h1>Welcome to WerdNerd, {user["email"] || guest}!</h1>
      <h2>Play WerdWeb now!</h2>
      <GameForm user={user} />
      <div>
        <Link to={`/study_lists/new`}>make a new word list!</Link>
      </div>
      <div>
        <Link to={"users/login"}>Sign-up/Log-in</Link>
      </div>
    </div>
  );
};

export default Welcome;
