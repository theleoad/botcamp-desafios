import styled from "styled-components";
import { colors } from "./../../variables"; 

import avatarBotcamp from "../../img/botcamp-avatar.svg";

const Avatar = styled.img.attrs({
  src: avatarBotcamp,
  alt: "Avatar Botcamp"    
})`
  background: ${colors.darkBlue};
  border-radius: 50%;
  box-sizing: content-box;
  height: 28px;
  margin: 0 10px 0 16px;
  padding: 6px 8px;
  width: 24px;
`;

export default Avatar;