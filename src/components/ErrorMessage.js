const ErrorMessage = ({ error, setError }) => {
  if (error) {
    return (
      <div
        className="d-flex justify-content-center align-items-center alert alert-danger p-1"
        role="alert"
      >
        <div>{error}</div>
        <button
          className="btn btn-danger"
          onClick={() => {
            setError("");
          }}
        >
          X
        </button>
      </div>
    );
  } else return null;
};
export default ErrorMessage;
