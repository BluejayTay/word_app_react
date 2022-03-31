const WordField = (props) => {
  return (
    <div>
      <input name={`word${props.wordIndex}`} onChange={props.handleWordsHash} />
    </div>
  );
};
export default WordField;
