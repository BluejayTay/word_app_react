import { useState, useEffect } from "react";

const Synonym = ({ synonym, select, activeSynonym, matchedSynonyms }) => {
  const name = synonym.name;
  const matchIndex = synonym.match_index;
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    matchedSynonyms.includes(matchIndex)
      ? setIsDisabled(true)
      : setIsDisabled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedSynonyms]);

  return (
    <div>
      <button
        id={`syn${matchIndex}`}
        disabled={isDisabled}
        onClick={() => {
          select(matchIndex);
        }}
        className={
          activeSynonym == matchIndex
            ? "btn selected word-btn my-1"
            : "btn word-btn my-1"
        }
      >
        {name}({matchIndex})
      </button>
    </div>
  );
};

export default Synonym;
