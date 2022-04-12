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
              startAnchor="right"
              endAnchor="left"
              curveness={0.3}
              showHead={false}
              color={"#ff621f"}
            />
          </div>
        ))}
      </div>
    );
};
export default ConnectingLines;
