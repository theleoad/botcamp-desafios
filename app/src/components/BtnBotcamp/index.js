import styled from "styled-components";
import { colors } from "./../../variables"; 

const BtnBotcamp = styled.button.attrs({
  children: props => props.content
})`
  background: ${colors.tomato};
  color: ${colors.white};
  font-size: 20px;
  width: 280px;
  height: 50px;
  border-radius: 25px;
  text-transform: uppercase;
  cursor: pointer;
}  
`;

export default BtnBotcamp;
