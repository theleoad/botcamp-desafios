import styled from "styled-components";
import { colors } from "../../variables";

const MessageWrapper = styled.div`
    background: ${colors.lightPurple};
    height: 100vh;
    padding-top: 100px;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: -1;
`;

export default MessageWrapper;