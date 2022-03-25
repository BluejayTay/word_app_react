import { useState, useEffect } from "react";
import axios from "axios";
import Word from "./Word";
import GameSynonyms from "./GameSynonyms";
import Timer from "./Timer";
import MatchCountDisplay from "./MatchCountDisplay";
import ConnectingLines from "./ConnectingLines";

const Game = (props) => {
  const studyListId = props.match.params.study_list_id;
  const [title, setTitle] = useState("");
  const [words, setWords] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [fastestTimeRecord, setFastedTimeRecord] = useState();
  const [gameStart, setGameStart] = useState(false);
  const [activeWord, setActiveWord] = useState(null);
  const [activeSynonym, setActiveSynonym] = useState(null);
  const [maxMatchNum, setMaxMatchNum] = useState();
  const [matchCount, setMatchCount] = useState(0);
  const [matchedWords, setMatchedWords] = useState([]);
  const [matchedSynonyms, setMatchedSynonyms] = useState([]);
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    requestGame();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestGame() {
    axios
      .get(`http://localhost:3000/api/study_lists/${studyListId}/new_game`)
      .then((response) => {
        setTitle(response.data.study_list.title);
        setWords(response.data.words);
        setSynonyms(response.data.synonyms);
        setMaxMatchNum(response.data.words.length);
        setFastedTimeRecord(response.data.study_list.high_score);
        console.log(response.data);
      });
  }

  useEffect(() => {
    if (
      activeSynonym == activeWord &&
      activeSynonym != null &&
      activeWord != null
    ) {
      setMatchCount(matchCount + 1);
      setMatchedWords([...matchedWords, activeWord]);
      setMatchedSynonyms([...matchedSynonyms, activeSynonym]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSynonym, activeWord]);

  useEffect(() => {
    if (matchCount == maxMatchNum) {
      setGameEnd(true);
      setActiveSynonym(null);
      setActiveWord(null);
    }
  }, [matchCount, maxMatchNum]);

  useEffect(() => {
    setActiveSynonym(null);
  }, [activeWord]);

  const handleResetGame = () => {
    setGameStart(false);
    setGameEnd(false);
    setMatchCount(0);
    setActiveSynonym(null);
    setActiveWord(null);
    setMatchedWords([]);
    setMatchedSynonyms([]);
    requestGame();
  };

  return (
    <div>
      <div style={{ fontSize: "32px" }}>
        WerdWeb Game for: {title}
        {gameStart == false ? (
          <button onClick={() => setGameStart(true)}>Start Game</button>
        ) : (
          <button onClick={handleResetGame}>Reset Game</button>
        )}
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "grey" }}>
          Record for Fastest Time:
          <div style={{ fontSize: "24px" }}>
            10 matches in {fastestTimeRecord} seconds
          </div>
        </div>
        <Timer
          studyListId={studyListId}
          gameStart={gameStart}
          gameEnd={gameEnd}
          fastestTimeRecord={fastestTimeRecord}
          loadSavedScore={setFastedTimeRecord}
        />
        <MatchCountDisplay matchCount={matchCount} maxMatchNum={maxMatchNum} />
      </div>
      <div style={{ display: "flex" }}>
        <div id="words">
          <h1 style={{ color: "limegreen" }}>Words</h1>
          <div>
            {words.map((word) => (
              <div
                key={word.name}
                style={{ display: "flex", justifyContent: "end" }}
              >
                <Word
                  matchedWords={matchedWords}
                  activeWord={activeWord}
                  select={setActiveWord}
                  word={word}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: "150px" }}>
          <ConnectingLines matchedWords={matchedWords} />
        </div>

        <div id="synonyms">
          <h1 style={{ color: "blue" }}>Synonyms</h1>
          <GameSynonyms
            matchedSynonyms={matchedSynonyms}
            activeSynonym={activeSynonym}
            select={setActiveSynonym}
            synonyms={synonyms}
            gameStart={gameStart}
          />
        </div>
      </div>
    </div>
  );
};
export default Game;
