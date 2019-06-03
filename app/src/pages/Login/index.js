import React from "react";
import { Link } from "react-router-dom";

import LoginWrapper from "../../components/LoginWrapper";
import BtnBotcamp from "../../components/BtnBotcamp";
import LogoBotcamp from "../../components/LogoBotcamp";

const Login = () => (
  <LoginWrapper>
    <LogoBotcamp />
    <Link to="/chat">  
      <BtnBotcamp content="Entrar" />
    </Link>
  </LoginWrapper>
);

export default Login;
