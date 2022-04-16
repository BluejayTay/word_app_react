import Word from "./Word";

const GameWords = ({ words, matchedWords, activeWord, select }) => {
  return (
    <div className="word">
      {words.map((word) => (
        <div key={word.name}>
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
