import { useState, useEffect } from "react";

const Timer = ({ gameStart, gameEnd, seconds, setSeconds }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (gameStart == true && gameEnd == false) setIsActive(true);
    else if (gameStart == true && gameEnd == true) setIsActive(false);
    else if (gameEnd == false && gameStart == false) {
      setIsActive(false);
      setSeconds(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStart, gameEnd]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, seconds]);

  return (
    <div className="col timer-display">
      <div>Timer:</div>
      <div className="h3 text-center my-auto ">{seconds}s</div>
    </div>
  );
};

export default Timer;
