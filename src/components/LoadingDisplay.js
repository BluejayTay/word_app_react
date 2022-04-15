import LoadingSpin from "react-loading-spin";
import styled from "styled-components";

const StyledLoad = styled.div`
  background-color: #e4f967;
`;
const LoadingDisplay = () => (
  <StyledLoad>
    <div className="p-1 d-flex justify-content-center align-items-center">
      <LoadingSpin /> <div className="ms-1">Loading...</div>
    </div>
  </StyledLoad>
);

export default LoadingDisplay;
