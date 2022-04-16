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
    <div className="col record-display m-0 p-1">
      <div>Record:</div>
      <div className="h3 text-center m-auto ms-2">{showRecord()}</div>
    </div>
  );
};
export default RecordDisplay;
