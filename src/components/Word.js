//import { Link } from "react-router-dom";

const Word = ({ word, matchIndex }) => {
  const name = word.name;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ background: "orange" }}>
        <h1>{name}</h1>
      </div>
      <div style={{ background: "pink" }}>{matchIndex}</div>
    </div>
  );
};

export default Word;
