import React, { Component } from "react";
import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";
import "./Styles/reset.css";
import "./Styles/style.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LogoBotcamp />
        <BtnBotcamp />
      </div>
    );
  }
}

export default App;
