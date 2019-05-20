import styled from "styled-components";

import background from "../../img/botcamp-bg.png";

const LoginWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default LoginWrapper;
