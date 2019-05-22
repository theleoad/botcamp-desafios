import styled from "styled-components";

const SuperHeaderWrapper = styled.header`
  filter: drop-shadow(0 6px 3px rgba(50, 50, 0, 0.5));
`;

const HeaderWrapper = styled.div`
  background: #26265e;
  padding: 10px 16px 18px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
`;

export default {
  HeaderWrapper,
  SuperHeaderWrapper
};
