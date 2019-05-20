import React from "react";

import LoginWrapper from "../../components/LoginWrapper";
import BtnBotcamp from "../../components/BtnBotcamp";
import LogoBotcamp from "../../components/LogoBotcamp";

const Login = () => (
  <LoginWrapper>
    <LogoBotcamp />
    <BtnBotcamp content="Entrar" />
  </LoginWrapper>
);

export default Login;
