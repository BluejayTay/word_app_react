import { useState, useEffect } from "react";
import axios from "axios";
import { API_ROOT } from "../apiRoot";
import MatchCountDisplay from "./MatchCountDisplay";
import RecordDisplay from "./RecordDisplay";
import Timer from "./Timer";

const StatsPanel = ({
  fastestTimeRecord,
  setNewRecord,
  gameEnd,
  gameStart,
  matchCount,
  maxMatchNum,
  studyListId,
  RenderGameBtns,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (gameEnd == true)
      if (!fastestTimeRecord || seconds < fastestTimeRecord) {
        handleSaveTime();
      } else
        setStatusMessage(
          `${maxMatchNum} words matched in ${seconds}s. Reset to play again!`
        );

    async function handleSaveTime() {
      setStatusMessage("Saving new record...");
      axios.put(`${API_ROOT}api/study_lists/${studyListId}`, {
        study_list: { high_score: seconds },
      });
      setStatusMessage("🥳 New record saved!");
      setNewRecord(seconds);
    }
    return [statusMessage];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameEnd]);

  useEffect(() => {
    gameStart
      ? setStatusMessage("Game in-progress")
      : setStatusMessage("Press start to begin  ->");
  }, [gameStart]);

  return (
    <div className="row game-panel g-0">
      <div className="col-md-6 d-flex p-2 ">
        <RecordDisplay fastestTimeRecord={fastestTimeRecord} />
        <Timer
          seconds={seconds}
          setSeconds={setSeconds}
          gameStart={gameStart}
          gameEnd={gameEnd}
        />
        <MatchCountDisplay matchCount={matchCount} maxMatchNum={maxMatchNum} />
      </div>
      <div className="col d-flex p-3">
        <div className="col d-flex message-display">
          <div className="text-center m-auto">{statusMessage}</div>
        </div>
        <div className="my-auto mx-2">
          <div className="text-center">{RenderGameBtns()}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
