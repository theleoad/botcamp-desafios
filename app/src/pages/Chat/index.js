import React from "react";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import InputMessage from "../../components/InputMessage";

const Chat = () => (
  <>
    <HeaderWrapper.SuperHeaderWrapper>
      <HeaderWrapper.HeaderWrapper>
        <LogoBotcamp small />
        <LogoutBotcamp />
      </HeaderWrapper.HeaderWrapper>
    </HeaderWrapper.SuperHeaderWrapper>
    <InputMessage />
  </>
);

export default Chat;
