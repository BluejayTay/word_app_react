import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import axios from "axios";
import Word from "./Word";
import GameSynonyms from "./GameSynonyms";
import Timer from "./Timer";
import ScoreBox from "./ScoreBox";
import Basket from "./Basket";
//import Xarrow from "react-xarrows";

const Game = (props) => {
  const studyListId = props.match.params.study_list_id;
  const [title, setTitle] = useState("");
  const [words, setWords] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(0);
  const maxScore = words.length;

  useEffect(() => {
    requestGame();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestGame() {
    axios
      .get(`http://localhost:3000/api/study_lists/${studyListId}/new_game`)
      .then((response) => {
        setTitle(response.data.title);
        setWords(response.data.words);
        setSynonyms(response.data.synonyms);
        console.log(response.data);
      });
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        Game for: {studyListId}/{title}
        <button onClick={() => setGameStart(true)}>Start game</button>
        <Timer gameStart={gameStart} />
        <ScoreBox score={score} maxScore={maxScore} />
        <div style={{ display: "flex" }}>
          <div id="words">
            <h1 style={{ color: "limegreen" }}>Words</h1>
            <div>
              {words.map((word) => (
                <div
                  key={word.name}
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  <Word word={word} matchIndex={words.indexOf(word)} />
                  <div>
                    <Basket props={props} word={word} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ width: "250px" }}></div>

          <div id="synonyms">
            <h1 style={{ color: "blue" }}>Synonyms</h1>
            <GameSynonyms synonyms={synonyms} gameStart={gameStart} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};
export default Game;
