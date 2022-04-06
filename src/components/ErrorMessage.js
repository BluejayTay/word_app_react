const ErrorMessage = ({ error, setError }) => {
  if (error) {
    return (
      <div
        id="error"
        className="d-flex justify-content-center align-items-center alert p-1"
        role="alert"
      >
        <div>{error}</div>
        <button
          className="btn dismiss py-0 ms-1"
          onClick={() => {
            setError("");
          }}
        >
          <i className="bi bi-x p-0"></i>
        </button>
      </div>
    );
  } else return null;
};
export default ErrorMessage;
