const MatchCountDisplay = ({ matchCount, maxMatchNum }) => {
  return (
    <div className="col match-display m-0 p-1">
      <div>Matches:</div>
      <div className="h3 text-center m-auto ms-2">
        {matchCount}/{maxMatchNum}
      </div>
    </div>
  );
};

export default MatchCountDisplay;
