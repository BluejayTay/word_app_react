import { useState, useEffect } from "react";
import { API_ROOT } from "../apiRoot";
import axios from "axios";
import GameSynonyms from "./GameSynonyms";
import ConnectingLines from "./ConnectingLines";
import styled from "styled-components";
import StatsPanel from "./StatsPanel";
import GameWords from "./GameWords";

const StyledGame = styled.div`
  .game-start-btn {
    background-color: #d1ed31;
  }
  .brand-title {
    font-family: "Rampart One", sans-serif;
    font-size: 48px;
  }
  .game-panel {
    background-color: #100804;
  }
  .message-display {
    background-color: #fcffee;
    fontsize: 18px;
  }
  .record-display,
  .timer-display,
  .match-display {
    background-color: #3d3a39;
    color: #d6fdff;
    fontsize: 18px;
    border: 1px solid #d6fdff;
  }
  .game-title {
    background-color: #e4fbff;
  }
  .game-body {
    background-color: #fcfdf1;
  }
  .word-btn {
    background-color: #d6fdff;
    font-size: 20px;
    font-weight: 500;
  }
  .word-btn:hover,
  .selected {
    background-color: #ff501f;
    color: #d6fdff;
  }
  .btn:disabled {
    background-color: #ff621f;
  }
  @media screen and (max-width: 450px) {
    .brand-title {
      font-size: 32px;
    }
    .record-display,
    .timer-display,
    .match-display,
    .message-display {
      fontsize: 12px;
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
          className="btn game-start-btn btn-lg m-1"
          onClick={() => setGameStart(true)}
        >
          Start
        </button>
      );
    else
      return (
        <button className="btn game-start-btn btn-lg" onClick={handleResetGame}>
          Reset
        </button>
      );
  };

  return (
    <StyledGame>
      <div className="container">
        <div className="card mt-3">
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
          <div className="row game-body g-0 p-1">
            <div className="col" id="words">
              <h2 className="text-end">Words</h2>
              <GameWords
                words={words}
                matchedWords={matchedWords}
                activeWord={activeWord}
                select={setActiveWord}
              />
            </div>

            <div className="col">
              <ConnectingLines matchedWords={matchedWords} />
            </div>

            <div className="col" id="synonyms">
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
