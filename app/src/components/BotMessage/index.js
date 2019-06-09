import React from "react";

import { Wrapper } from "./styles";
import Avatar from "../Avatar";
import MessageBotcamp from "../MessageBotcamp";

const BotMessage = () => (
    <Wrapper>
        <Avatar />
        <MessageBotcamp bot>Legal</MessageBotcamp>
    </Wrapper>
);

export default BotMessage;