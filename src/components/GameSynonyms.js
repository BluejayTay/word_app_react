import { useEffect, useState } from "react";
import Synonym from "./Synonym";

const GameSynonyms = ({
  synonyms,
  gameStart,
  select,
  activeSynonym,
  matchedSynonyms,
}) => {
  const [shuffledSynonyms, setShuffledSynonyms] = useState([]);

  useEffect(() => {
    setShuffledSynonyms(
      synonyms
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  }, [gameStart, synonyms]);

  if (gameStart)
    return (
      <div>
        {shuffledSynonyms.map((synonym) => (
          <div key={synonym.name} className="d-flex justify-content-start">
            <Synonym
              matchedSynonyms={matchedSynonyms}
              synonym={synonym}
              activeSynonym={activeSynonym}
              select={select}
            />
          </div>
        ))}
        .
      </div>
    );
  else return null;
};

export default GameSynonyms;
