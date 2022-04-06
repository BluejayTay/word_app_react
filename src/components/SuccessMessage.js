const SuccessMessage = ({ successMessage, setSuccessMessage }) => {
  if (successMessage) {
    return (
      <div
        id="victory"
        className="d-flex justify-content-center align-items-center alert p-1"
        role="alert"
      >
        <div>{successMessage}</div>
        <button
          className="btn btn-victory py-0 ms-1"
          onClick={() => {
            setSuccessMessage("");
          }}
        >
          <i className="bi bi-x p-0"></i>
        </button>
      </div>
    );
  } else return null;
};
export default SuccessMessage;
