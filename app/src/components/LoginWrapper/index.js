import styled from "styled-components";

import background from "../../img/botcamp-bg.png";

const LoginWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  padding: 120px 0 80px;
`;

export default LoginWrapper;
