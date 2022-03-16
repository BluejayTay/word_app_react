import React from "react";
import GameForm from "./GameForm";
//import { Link } from "react-router-dom";
//import StudyListIndex from "./StudyListIndex";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to WerdNerd</h1>
      <h2>Start playing now with one of our curated lists!</h2>
      <GameForm />
    </div>
  );
};

export default Welcome;
