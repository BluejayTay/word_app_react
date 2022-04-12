const MatchCountDisplay = ({ matchCount, maxMatchNum }) => {
  return (
    <div className="col match-display m-1 p-1">
      Matches:
      <h2 className="text-center">
        {matchCount}/{maxMatchNum}
      </h2>
    </div>
  );
};

export default MatchCountDisplay;
