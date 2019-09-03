import styled from "styled-components";
import { wp } from "Core/Utils";

const Space = styled.View`
  margin: ${props => wp(props.value) || wp(0.5)}px;
  height: 0px;
  width: 0px;
`;

export default Space;
