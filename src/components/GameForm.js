import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
//import useApiLists from "./useApiLists";
import axios from "axios";
//import Game from "./Game";

const GameForm = ({ user }) => {
  const userId = user["id"];
  const [studyLists, setStudyLists] = useState([]);
  const [studyListId, setStudyListId] = useState();
  const [toGame, setToGame] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/study_lists`, { user_id: userId })
      .then((response) => {
        setStudyLists(response.data);
        console.log(response.data);
      });
  }, [userId]);

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
