const ScoreBox = (props) => {
  const score = props.score;
  const maxScore = props.maxScore;

  return (
    <div id="scorebox" style={{ background: "yellow" }}>
      Score: {score}/{maxScore}
    </div>
  );
};

export default ScoreBox;
