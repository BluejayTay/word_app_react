const RecordDisplay = ({ fastestTimeRecord }) => {
  const showRecord = () => {
    if (fastestTimeRecord)
      return (
        <div>
          {fastestTimeRecord}s <br></br>
        </div>
      );
    else return <span>N/A</span>;
  };

  return (
    <div className="col record-display m-1 p-1">
      Record:
      <h2 className="text-center">{showRecord()}</h2>
    </div>
  );
};
export default RecordDisplay;
