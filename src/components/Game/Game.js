import { useState, useEffect } from "react";
import { API_ROOT } from "../../apiRoot";
import axios from "axios";
import GameSynonyms from "./GameSynonyms";
import ConnectingLines from "./ConnectingLines";
import StatsPanel from "./StatsPanel";
import GameWords from "./GameWords";
import StyledGame from "./StyledGame";

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
      .get(`${API_ROOT}api/study_lists/${studyListId}/new_game`)
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
      setActiveSynonym(null);
      setActiveWord(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSynonym, activeWord]);

  useEffect(() => {
    if (matchCount == maxMatchNum) {
      setGameEnd(true);
    }
  }, [matchCount, maxMatchNum]);

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

  const renderGameBtns = () => {
    if (!gameStart && !gameEnd)
      return (
        <button
          className="btn btn-green btn-lg"
          onClick={() => setGameStart(true)}
        >
          Start
        </button>
      );
    else
      return (
        <button className="btn btn-green btn-lg" onClick={handleResetGame}>
          Reset
        </button>
      );
  };

  return (
    <StyledGame>
      <div className="container">
        <div className="card game-card shadow-lg">
          <div className="card-header game-title">
            <h1 className="brand-title">{title}</h1>
          </div>
          <div className="row d-flex g-0">
            <StatsPanel
              gameEnd={gameEnd}
              gameStart={gameStart}
              matchCount={matchCount}
              maxMatchNum={maxMatchNum}
              studyListId={studyListId}
              setNewRecord={setFastedTimeRecord}
              fastestTimeRecord={fastestTimeRecord}
              RenderGameBtns={renderGameBtns}
            />
          </div>

          <div className="row game-body g-0 rounded-bottom">
            <div className="col-5 pb-4">
              <h2 className="h2 word">Words</h2>
              <GameWords
                words={words}
                matchedWords={matchedWords}
                activeWord={activeWord}
                select={setActiveWord}
              />
            </div>

            <div className="col-2">
              <ConnectingLines matchedWords={matchedWords} />
            </div>

            <div className="col-5">
              <h2 className="h2 synonym">Synonyms</h2>
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
      </div>
    </StyledGame>
  );
};
export default Game;
