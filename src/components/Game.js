import { useState, useEffect } from "react";
import { API_ROOT } from "../apiRoot";
import axios from "axios";
import GameSynonyms from "./GameSynonyms";
import ConnectingLines from "./ConnectingLines";
import styled from "styled-components";
import StatsPanel from "./StatsPanel";
import GameWords from "./GameWords";

const StyledGame = styled.div`
  .brand-title {
    font-family: "Rampart One", sans-serif;
    font-size: 48px;
  }
  .game-panel {
    background-color: #100804;
    border-top: 2px solid #100804;
    border-bottom: 2px solid #100804;
  }
  .right-panel {
    background-color: #fcffee;
    fontsize: 18px;
  }
  .left-panel {
    border-right: 2px solid #100804;
  }
  .record-display,
  .timer-display,
  .match-display {
    background-color: #fcffee;
    fontsize: 18px;
  }
  .record-display,
  .timer-display {
    border-right: 2px solid #100804;
  }
  .game-card {
    border: 1px solid #100804;
  }
  .game-title {
    background-color: #e4fbff;
  }
  .game-body {
    background-color: #aadeee;
  }
  .word-btn {
    background-color: #eefeff;
    font-size: 20px;
    font-weight: 500;
  }
  .selected {
    background-color: #ff501f;
    color: #eefeff;
  }
  .btn:disabled {
    background-color: #ff621f;
  }
  @media screen and (max-width: 450px) {
    .brand-title {
      font-size: 30px;
    }
    .record-display,
    .timer-display,
    .match-display,
    .message-display {
      fontsize: 14px;
    }
    .word-btn {
      font-size: 14px;
    }
    .h2 {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    .left-panel {
      border-right: 0px;
      border-bottom: 2px solid #100804;
    }
    .record-display,
    .timer-display,
    .match-display {
      display: flex;
      align-items: center;
    }
  }
  @media screen and (min-width: 500px) {
    .word-btn:hover {
      background-color: #ff501f;
      color: #eefeff;
      box-shadow: 4px 4px 5px 2px rgba(231, 85, 12, 0.482);
    }
  }
`;

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

  const RenderGameBtns = () => {
    if (!gameStart && !gameEnd)
      return (
        <button
          className="btn btn-play btn-lg"
          onClick={() => setGameStart(true)}
        >
          Start
        </button>
      );
    else
      return (
        <button className="btn btn-play btn-lg" onClick={handleResetGame}>
          Reset
        </button>
      );
  };

  return (
    <StyledGame>
      <div className="container">
        <div className="card game-card shadow-lg mt-3">
          <div className="card-header game-title">
            <h1 className="brand-title text-center">{title}</h1>
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
              RenderGameBtns={RenderGameBtns}
            />
          </div>

          <div className="row game-body g-0 p-1 rounded-bottom">
            <div className="col-5" id="words">
              <h2 className="text-end">Words</h2>
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

            <div className="col-5" id="synonyms">
              <h2 className="text-start">Synonyms</h2>
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
