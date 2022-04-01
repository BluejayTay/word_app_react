const RecordDisplay = ({ showRecord }) => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      Record:
      <div style={{ fontSize: "24px" }}>{showRecord()}</div>
    </div>
  );
};
export default RecordDisplay;
