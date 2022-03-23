import { useState } from "react";

const Word = ({ word, matchIndex }) => {
  const name = word.name;
  const [selected, setSelected] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div style={{ background: "orange" }}>
        <h1>{name}</h1>
      </div>
      <button
        ref={word.matchIndex}
        id={matchIndex}
        value={matchIndex}
        style={{ background: selected ? "blue" : "pink" }}
        onClick={() => (!selected ? setSelected(true) : setSelected(false))}
      >
        {matchIndex}
      </button>
    </div>
  );
};

export default Word;
