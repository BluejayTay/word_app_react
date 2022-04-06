import { useState, useEffect } from "react";
import axios from "axios";
import { API_ROOT } from "../apiRoot";

const Timer = ({
  studyListId,
  gameStart,
  gameEnd,
  fastestTimeRecord,
  loadSavedScore,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [saveScoreStatus, setSaveScoreStatus] = useState("");

  useEffect(() => {
    if (gameStart == true && gameEnd == false) setIsActive(true);
    else if (gameStart == true && gameEnd == true) setIsActive(false);
    else if (gameEnd == false && gameStart == false) {
      setIsActive(false);
      setSeconds(0);
      setSaveScoreStatus("");
    }
  }, [gameStart, gameEnd]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (gameEnd == true)
      if (fastestTimeRecord == null || seconds < fastestTimeRecord)
        handleSaveTime();

    async function handleSaveTime() {
      setSaveScoreStatus("saving");
      axios.put(`${API_ROOT}api/study_lists/${studyListId}`, {
        study_list: { high_score: seconds },
      });
      setSaveScoreStatus("New record saved!");
      loadSavedScore(seconds);
    }
    return [saveScoreStatus];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameEnd]);

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
      <div style={{ fontSize: "32px" }}>{seconds}s</div>
      <div style={{ fontSize: "24px" }}>{saveScoreStatus}</div>
    </div>
  );
};

export default Timer;
