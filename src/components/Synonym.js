const Synonym = ({ synonym, matchIndex }) => {
  const name = synonym.name;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ background: "pink" }}>{matchIndex}</div>
      <div style={{ background: "orange" }}>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Synonym;
