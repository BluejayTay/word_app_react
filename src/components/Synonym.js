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
    <div id={`syn${matchIndex}`}>
      <button
        disabled={isDisabled}
        onClick={() => {
          select(matchIndex);
        }}
        className="btn synonym-btn"
        style={{
          backgroundColor: activeSynonym == matchIndex ? "#ddf269" : "",
        }}
      >
        {" "}
        {name}({matchIndex})
      </button>
    </div>
  );
};

export default Synonym;
