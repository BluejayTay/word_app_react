//import { useState } from "react";
import Synonym from "./Synonym";

const GameSynonyms = (props) => {
  const gameStart = props.gameStart;
  const synonyms = props.synonyms;

  let shuffledSynonyms = synonyms
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  if (gameStart == true)
    return (
      <div>
        {shuffledSynonyms.map((synonym) => (
          <div key={synonym.name}>
            <Synonym synonym={synonym} matchIndex={synonyms.indexOf(synonym)} />
          </div>
        ))}
        .
      </div>
    );
  else return null;
};

export default GameSynonyms;
