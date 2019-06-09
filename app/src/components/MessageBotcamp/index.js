import styled from "styled-components";

const MessageBotcamp = styled.p`
    background: rgba(238,62,37,0.83);
    border-radius: 10px 0 10px 10px;
    color: white;
    font-family: Roboto, sans-serif;
    margin: 0 16px 20px auto;
    padding: 10px 15px;
    position: relative;
    width: 68%;

    &:first-child {
        margin-top: 40px;
    }

    &::after {
        border-right: 4px solid transparent;
        border-top: 8px solid rgba(238, 62, 37, 0.83);
        content: '';
        height: 0;
        position: absolute;
        right: -4px;
        top: 0;
        width: 0;
    }

    ${({ bot }) =>
      bot &&
    `
        border-radius: 0 10px 10px 10px;
        color: #333;
        background-color: rgba(255,255,255,0.83);  
        border: solid 1px #d7d7ea;
        margin: 0;
        &::after {
          border-right: none;
          border-left: 4px solid transparent;
          border-top: 8px solid #fbfbff;
          left: -4px;
        }
    `};
`;

export default MessageBotcamp;