import styled from "styled-components";

const MessageBotcamp = styled.p`
    background: rgba(238,62,37,0.83);
    border-radius: 10px 0 10px 10px;
    color: white;
    font-family: Roboto, sans-serif;
    margin-left: auto;
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
        right: -3px;
        top: 0;
        width: 0;
    }
`;

export default MessageBotcamp;