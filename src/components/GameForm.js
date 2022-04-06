import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const GameForm = ({ user, setError }) => {
  const [studyLists, setStudyLists] = useState([]);
  const [studyListId, setStudyListId] = useState();
  const [toGame, setToGame] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token)
      axios
        .get(`http://localhost:3000/api/study_lists`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          user_id: user["id"],
        })
        .then((response) => {
          setStudyLists(response.data);
          console.log(response.data);
        });
    if (!token)
      axios.get(`http://localhost:3000/api/study_lists`).then((response) => {
        setStudyLists(response.data);
        console.log(response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGame = () => {
    if (studyListId) setToGame(true);
    if (!studyListId) setError("Error: Please select a list before submitting");
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
        <button className="btn btn-play">Play</button>
      </form>
    </div>
  );
};

export default GameForm;
