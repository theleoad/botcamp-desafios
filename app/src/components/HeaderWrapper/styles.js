import styled from "styled-components";
import { colors } from "./../../variables"; 

export const SuperWrapper = styled.header`
  filter: drop-shadow(0 6px 3px rgba(50, 50, 0, 0.5));
`;

export const Wrapper = styled.div`
  background: ${colors.darkBlue};
  padding: 10px 16px 18px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
`;

