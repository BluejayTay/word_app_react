const MatchCountDisplay = ({ matchCount, maxMatchNum }) => {
  return (
    <div id="scorebox" style={{ background: "yellow" }}>
      Words matched:
      <div style={{ fontSize: "32px" }}>
        {matchCount}/{maxMatchNum}
      </div>
    </div>
  );
};

export default MatchCountDisplay;
