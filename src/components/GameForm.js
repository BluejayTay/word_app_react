import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../apiRoot";
import axios from "axios";
import styled from "styled-components";

const StyledGameForm = styled.div`
  .brand-style {
    font-family: "Rampart One", sans-serif;
  }
`;

const GameForm = ({ user, setError }) => {
  const [studyLists, setStudyLists] = useState([]);
  const [studyListId, setStudyListId] = useState();
  const [toGame, setToGame] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token)
      axios
        .get(`${API_ROOT}api/study_lists`, {
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
      axios.get(`${API_ROOT}api/study_lists`).then((response) => {
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
    <StyledGameForm>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleGame();
        }}
      >
        <label htmlFor="studyList">
          Chose list:
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
    </StyledGameForm>
  );
};

export default GameForm;
