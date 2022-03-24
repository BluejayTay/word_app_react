import React from "react";
import GameForm from "./GameForm";
//import { Link } from "react-router-dom";
//import StudyListIndex from "./StudyListIndex";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to WerdNerd</h1>
      <h2>Play the WerdWeb game with one of our word lists now!</h2>
      <GameForm />
    </div>
  );
};

export default Welcome;
