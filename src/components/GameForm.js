import { useState } from "react";
import { Redirect } from "react-router-dom";
import useApiLists from "./useApiLists";
//import Game from "./Game";

const GameForm = () => {
  const [studyLists] = useApiLists();
  const [studyListId, setStudyListId] = useState();
  const [toGame, setToGame] = useState(false);

  if (toGame == true) {
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
          setToGame(true);
        }}
      >
        <label htmlFor="studyList">
          Chose a list:
          <select
            id="studyList"
            //value={studyList}
            onChange={(event) => setStudyListId(event.target.value)}
            onBlur={(event) => setStudyListId(event.target.value)}
          >
            <option />
            {studyLists.map((List) => (
              <option key={List.id} value={List.id}>
                {List.title}
              </option>
            ))}
          </select>
        </label>
        <button>Play WerdWeb!</button>
      </form>
    </div>
  );
};

export default GameForm;
