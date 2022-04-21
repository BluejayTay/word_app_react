import { useState } from "react";
import { Redirect } from "react-router-dom";

const GameForm = ({ studyLists, setError }) => {
  const defaultOption = "Choose a list";
  const [studyListId, setStudyListId] = useState();
  const [toGame, setToGame] = useState(false);

  const handleGame = () => {
    studyListId && studyListId != defaultOption
      ? setToGame(true)
      : setError("Error: Please select a list before submitting");
  };

  if (toGame && studyListId) {
    return (
      <Redirect
        to={{
          pathname: `/study_lists/${studyListId}/game`,
        }}
      />
    );
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleGame();
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <select
              id="studyList"
              defaultValue={defaultOption}
              onChange={(event) => setStudyListId(event.target.value)}
              onBlur={(event) => setStudyListId(event.target.value)}
            >
              {" "}
              <option disabled>{defaultOption}</option>
              {studyLists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.title}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-green ms-1">Play</button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
