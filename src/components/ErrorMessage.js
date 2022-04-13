import styled from "styled-components";

const StyledError = styled.div`
  background-color: #f0bce1;
  font-size: 18px;
  font-weight: 400;

  .dismiss {
    background-color: #f561cb;
  }
  .bi-x {
    font-size: 28px;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
    .bi-x {
      font-size: 20px;
    }
  }
`;

const ErrorMessage = ({ error, setError }) => {
  if (error) {
    return (
      <StyledError>
        <div
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
      </StyledError>
    );
  } else return null;
};
export default ErrorMessage;
