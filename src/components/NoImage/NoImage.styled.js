import styled from "@emotion/styled";
import NoImage from "./NoImage";

const StyledNoImage = styled(NoImage)`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: black;
  width: ${({width}) => width}px;
  height: ${({width}) => width * 1.5}px;
`
export default StyledNoImage;