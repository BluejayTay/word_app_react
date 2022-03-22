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

//{synonyms.map((synonym) => (
//<h1 key={synonym.name} value={synonym.name}>
//  {synonym.name}, {synonyms.indexOf(synonym)}
// </h1>
//))}
