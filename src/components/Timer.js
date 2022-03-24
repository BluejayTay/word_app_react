import { useState, useEffect } from "react";
import HighScore from "./HighScore";

const Timer = ({ studyListId, gameStart, gameEnd, previousHighScore }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (gameStart == true) setIsActive(true);
  }, [gameStart]);

  useEffect(() => {
    if (gameEnd == true) setIsActive(false);
  }, [gameEnd]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div
      style={{
        background: "lavender",
        width: "200px",
        height: "100px",
        fontsize: "18px",
      }}
    >
      <div>Timer:</div>
      <div className="time">{seconds}s</div>
      <HighScore
        studyListId={studyListId}
        gameEnd={gameEnd}
        score={seconds}
        previousHighScore={previousHighScore}
      />
    </div>
  );
};

export default Timer;
