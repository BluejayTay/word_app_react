const SuccessMessage = ({ successMessage, setSuccessMessage }) => {
  if (successMessage) {
    return (
      <div
        className="d-flex justify-content-center align-items-center alert alert-success p-1"
        role="alert"
      >
        <div>{successMessage}</div>
        <button
          className="btn btn-success"
          onClick={() => {
            setSuccessMessage("");
          }}
        >
          X
        </button>
      </div>
    );
  } else return null;
};
export default SuccessMessage;
