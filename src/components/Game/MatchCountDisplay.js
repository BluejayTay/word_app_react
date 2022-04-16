const MatchCountDisplay = ({ matchCount, maxMatchNum }) => {
  return (
    <div className="col match-display">
      <div>Matches:</div>
      <div className="h3 text-center my-auto">
        {matchCount}/{maxMatchNum}
      </div>
    </div>
  );
};

export default MatchCountDisplay;
