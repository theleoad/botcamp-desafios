import styled from "styled-components";

const InputMessage = styled.input.attrs({
  type: 'text',
  name: 'message',
  placeholder: 'Diz aí...'
})`
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
  border: none;
  color: rgba(0, 0, 0, 0.33);
  font-size: 20px;
  padding: 14px 11px 14px 16px;
  width: 100vw;
  height: 50px;
  background: #fbfbff;
  position: absolute; /*temporário*/
  bottom: 0; /*temporário*/
}
`;

export default InputMessage;