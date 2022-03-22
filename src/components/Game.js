import { useState, useEffect } from "react";
import axios from "axios";
import GameWords from "./GameWords";
import GameSynonyms from "./GameSynonyms";

const Game = (props) => {
  const studyListId = props.match.params.study_list_id;
  const [title, setTitle] = useState("");
  const [words, setWords] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  //const [gameLoaded, setGameLoaded] = useState(false);

  useEffect(() => {
    requestGame();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestGame() {
    //if (gameLoaded == false)
    axios
      .get(`http://localhost:3000/api/study_lists/${studyListId}/new_game`)
      .then((response) => {
        setTitle(response.data.title);
        setWords(response.data.words);
        setSynonyms(response.data.synonyms);
        console.log(response.data);
      });
    //setGameLoaded(true);
  }

  return (
    <div>
      Game for: {studyListId}, {title}
      <button onClick={() => setGameStart(true)}>Start game</button>
      <div style={{ display: "flex" }}>
        <div>
          <h1 style={{ color: "limegreen" }}>Words</h1>
          <GameWords words={words} />
        </div>
        <div style={{ width: "100px" }}></div>
        <div>
          <h1 style={{ color: "blue" }}>Synonyms</h1>
          <GameSynonyms synonyms={synonyms} gameStart={gameStart} />
        </div>
      </div>
    </div>
  );
};
export default Game;
