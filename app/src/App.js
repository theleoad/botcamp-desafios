import React, { Component } from "react";

import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";
import LoginWrapper from "./components/LoginWrapper";

import "./Styles/reset.css";

class App extends Component {
  render() {
    return (
      <LoginWrapper>
        <LogoBotcamp />
        <BtnBotcamp>Entrar</BtnBotcamp>
      </LoginWrapper>
    );
  }
}

export default App;
