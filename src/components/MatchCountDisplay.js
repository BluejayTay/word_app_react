const MatchCountDisplay = ({ matchCount, maxMatchNum }) => {
  return (
    <div id="scorebox" style={{ background: "yellow" }}>
      Words matched: {matchCount}/{maxMatchNum}
    </div>
  );
};

export default MatchCountDisplay;
