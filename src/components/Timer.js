import React, { useState, useEffect } from "react";

const Timer = ({ gameStart }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (gameStart == true) setIsActive(true);
  }, [gameStart]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div style={{ background: "lavender" }}>
      <div>Timer:</div>
      <div className="time">{seconds}s</div>
    </div>
  );
};

export default Timer;
