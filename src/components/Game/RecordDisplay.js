const RecordDisplay = ({ fastestTimeRecord }) => {
  const showRecord = () => {
    if (fastestTimeRecord)
      return (
        <div>
          {fastestTimeRecord}s <br></br>
        </div>
      );
    else return "N/A";
  };

  return (
    <div className="col record-display">
      <div>Record:</div>
      <div className="h3 text-center my-auto">{showRecord()}</div>
    </div>
  );
};
export default RecordDisplay;
