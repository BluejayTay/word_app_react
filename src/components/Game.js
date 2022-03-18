import { useState, useEffect } from "react";
import axios from "axios";

const Game = (props) => {
  const studyListId = props.match.params.study_list_id;
  const [title, setTitle] = useState("");
  const [words, setWords] = useState();
  //const [game, setGame] = useState();
  const [gameLoaded, setGameLoaded] = useState(false);

  useEffect(() => {
    if (gameLoaded == false) requestGame();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestGame() {
    axios
      .get(`http://localhost:3000/api/study_lists/${studyListId}/new_game`)
      .then((response) => {
        setTitle(response.data.title);
        console.log(response.data);
      });
    setGameLoaded(true);
  }
  console.log(words);
  return (
    <div>
      Hello Game! {studyListId}, {title}
      <button>get game</button>
    </div>
  );
};

export default Game;
