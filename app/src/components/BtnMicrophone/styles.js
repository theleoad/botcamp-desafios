import styled from "styled-components";
import microphone from "../../img/botcamp-microphone-icon.svg";
import { colors } from "./../../variables"; 


export const Wrapper = styled.figure`
  background: ${colors.tomato};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  box-shadow: -2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 5px;
  right: 11px;
`;

export const Image = styled.img.attrs({
  src: microphone
})``;

