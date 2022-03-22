import Word from "./Word";

const GameWords = ({ words }) => {
  return (
    <div>
      {words.map((word) => (
        <div key={word.name}>
          <Word word={word} matchIndex={words.indexOf(word)} />
        </div>
      ))}
      .
    </div>
  );
};

export default GameWords;
