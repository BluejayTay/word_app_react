import Xarrow from "react-xarrows";

const ConnectingLines = ({ matchedWords }) => {
  if (matchedWords != null)
    return (
      <div>
        {matchedWords.map((matchIndex) => (
          <div key={`line${matchIndex}`}>
            <Xarrow
              start={`word${matchIndex}`}
              end={`syn${matchIndex}`}
              curveness={0.2}
              showHead={false}
            />
          </div>
        ))}
      </div>
    );
};
export default ConnectingLines;
