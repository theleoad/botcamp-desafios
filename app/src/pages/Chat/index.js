import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderWrapper from "../../components/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBotcamp from "../../components/LogoutBotcamp";
import InputMessage from "../../components/InputMessage";
import MessageBotcamp from "../../components/MessageBotcamp";
import BotMessage from "../../components/BotMessage";
import FormMessage from "../../components/FormMessage";
import MessageWrapper from "../../components/MessageWrapper";
import InputFile from "../../components/InputFile";
import LabelForInput from "../../components/LabelForInput";
import ImageUpload from "../../components/ImageUpload";
import BtnMicrophone from "../../components/BtnMicrophone";

const Chat = () => {
  const [typing, setTyping] = useState("");
  const [messages, setMessages] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages(old => [...old, typing]);
    setTyping("");
  }

  const handleChange = (event) => setTyping(event.target.value);

  /***/

  const [imgFiles, setImgFiles] = useState([]);
  const [classChange, setClassChange] = useState("");

  const handleUpload = (event) => {
    setImgFiles(URL.createObjectURL(event.target.files[0]));
    setClassChange("show");
    console.log(imgFiles);
  };

  /****/
  
  
  return (
    <div>
      <HeaderWrapper>
        <LogoBotcamp small />
        <Link to="/">
          <LogoutBotcamp />
        </Link>
      </HeaderWrapper>

      <MessageWrapper>
        <MessageBotcamp>!cpf</MessageBotcamp>
        <BotMessage>123.456.789-10</BotMessage>
        {messages.map((message, key) => <MessageBotcamp key={key}>{message}</MessageBotcamp>)}
        <MessageBotcamp imgUp className={classChange}> <ImageUpload src={imgFiles} /></MessageBotcamp>
      </MessageWrapper>
      
      <FormMessage onSubmit={handleSubmit}>
        <InputMessage value={typing} onChange={handleChange}/>
        <LabelForInput />
        <InputFile onChange={handleUpload}/>
        <BtnMicrophone />
      </FormMessage>
    </div>
  )
  
  };

export default Chat;
