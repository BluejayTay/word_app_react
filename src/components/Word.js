import { useEffect, useState } from "react";

const Word = ({ activeWord, select, word, matchedWords }) => {
  const name = word.name;
  const matchIndex = word.match_index;
  const [disabledStatus, setDisabledStatus] = useState(false);

  useEffect(() => {
    matchedWords.includes(matchIndex)
      ? setDisabledStatus(true)
      : setDisabledStatus(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedWords]);

  return (
    <div id={`word${matchIndex}`}>
      <button
        disabled={disabledStatus}
        onClick={() => {
          select(matchIndex);
        }}
        className={
          activeWord == matchIndex
            ? "btn selected word-btn glow-btn my-1"
            : "btn word-btn glow-btn my-1"
        }
      >
        {name}
      </button>
    </div>
  );
};

export default Word;
