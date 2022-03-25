import { useEffect, useState } from "react";

const Word = ({ activeWord, select, word, matchedWords }) => {
  const name = word.name;
  const matchIndex = word.match_index;
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    matchedWords.includes(matchIndex)
      ? setIsDisabled(true)
      : setIsDisabled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedWords]);

  return (
    <div id={`word${matchIndex}`}>
      <button
        disabled={isDisabled}
        onClick={() => {
          select(matchIndex);
        }}
        style={{
          backgroundColor: activeWord == matchIndex ? "blue" : "orange",
          fontSize: "24px",
        }}
      >
        {name}({matchIndex})
      </button>
    </div>
  );
};

export default Word;
