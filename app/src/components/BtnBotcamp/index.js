import styled from "styled-components";

const BtnBotcamp = styled.button.attrs({
  children: props => props.content
})`
  background: #ee3e25;
  color: #fff;
  font-size: 20px;
  width: 280px;
  height: 50px;
  border-radius: 25px;
  text-transform: uppercase;
  cursor: pointer;
}  
`;

export default BtnBotcamp;
