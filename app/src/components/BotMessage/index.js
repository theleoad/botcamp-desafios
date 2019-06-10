import React from "react";

import { Wrapper } from "./styles";
import Avatar from "../Avatar";
import MessageBotcamp from "../MessageBotcamp";

const BotMessage = (props) => (
    <Wrapper>
        <Avatar />
        <MessageBotcamp bot>{props.children}</MessageBotcamp>
    </Wrapper>
);

export default BotMessage;