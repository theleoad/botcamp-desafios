import styled from "styled-components";

const MessageBotcamp = styled.div`
    background: rgba(238,62,37,0.83);
    width: 257px;
    margin-left: auto;
    margin-right: 16px;
    margin-top: 40px;
    height: 40px;
    border-radius: 10px;
    border-top-right-radius: inherit;
    position: relative;
    line-height: 30px;
    padding: 5px 10px;
    color: white;
    &:after {
        content: '';
        position: absolute;
        right: -3px;
        top: 0;
        height: 0;
        width: 0;
        border-top: 8px solid rgba(238, 62, 37, 0.83);
        border-right: 4px solid transparent;
    }
`;

export default MessageBotcamp;