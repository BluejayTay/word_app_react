import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../../apiRoot";
import axios from "axios";

const GameForm = ({ user, setLoading, setError }) => {
  const defaultOption = "Choose a list";
  const [studyLists, setStudyLists] = useState([]);
  const [studyListId, setStudyListId] = useState();
  const [toGame, setToGame] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("auth_token");
    if (token)
      axios
        .get(`${API_ROOT}api/study_lists`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          user_id: user["id"],
        })
        .then((response) => {
          console.log(response.data);
          setStudyLists(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          requestBaseLists();
        });
    else requestBaseLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function requestBaseLists() {
    axios.get(`${API_ROOT}api/study_lists`).then((response) => {
      console.log(response.data);
      setStudyLists(response.data);
      setLoading(false);
    });
  }

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
