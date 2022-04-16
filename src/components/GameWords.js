import Word from "./Word";

const GameWords = ({ words, matchedWords, activeWord, select }) => {
  return (
    <div>
      {words.map((word) => (
        <div key={word.name} className="d-flex word">
          <Word
            matchedWords={matchedWords}
            activeWord={activeWord}
            select={select}
            word={word}
          />
        </div>
      ))}
    </div>
  );
};
export default GameWords;
